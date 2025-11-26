"use client";

import React, {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  useCallback,
} from "react";
import clsx from "clsx";

type VideoSource = {
  src: string;
  type?: string;
  label?: string; // e.g. "1080p", "720p"
};

interface VideoPlayerProps {
  sources: VideoSource[];
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  initialVolume?: number; // 0–1
  defaultPlaybackRate?: number;

  // Yeni:
  fadeIn?: boolean; // start-da səsi yavaş aç
  fadeOut?: boolean; // pause/stop-da səsi yavaş bağla
  fadeDurationMs?: number; // fade müddəti ms (default 1200ms)
}

const formatTime = (time: number) => {
  if (!isFinite(time)) return "00:00";
  const totalSeconds = Math.floor(time);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return `${mm}:${ss}`;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  sources,
  poster,
  autoPlay = false,
  loop = false,
  className,
  initialVolume = 0.8,
  defaultPlaybackRate = 1,

  fadeIn = false,
  fadeOut = false,
  fadeDurationMs = 1200,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(initialVolume);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0); // 0–1
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(defaultPlaybackRate);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSourceIndex, setActiveSourceIndex] = useState(0);

  // Fade ilə bağlı ref-lər
  const fadeAnimationRef = useRef<number | null>(null);
  const isFadingRef = useRef(false);
  const shouldFadeInNextPlayRef = useRef(false);

  const clearFade = () => {
    if (
      fadeAnimationRef.current !== null &&
      typeof cancelAnimationFrame !== "undefined"
    ) {
      cancelAnimationFrame(fadeAnimationRef.current);
    }
    fadeAnimationRef.current = null;
    isFadingRef.current = false;
  };

  const startFade = (
    from: number,
    to: number,
    durationMs: number,
    onFinish?: () => void
  ) => {
    const video = videoRef.current;
    if (!video || typeof window === "undefined") return;

    clearFade();
    isFadingRef.current = true;

    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const v = from + (to - from) * t;

      if (!videoRef.current) {
        clearFade();
        return;
      }

      videoRef.current.volume = Math.max(0, Math.min(1, v));

      if (t < 1 && !videoRef.current.paused) {
        fadeAnimationRef.current = requestAnimationFrame(step);
      } else {
        clearFade();
        if (onFinish) onFinish();
      }
    };

    // Başlanğıc dəyəri dərhal yaz
    video.volume = from;
    fadeAnimationRef.current = requestAnimationFrame(step);
  };

  // muted flag (volume-dan ayrı)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    // mute olarkən, səsi də sıfra çəkmək istəsən:
    if (isMuted) {
      clearFade();
      video.volume = 0;
    } else {
      // unmute olanda volume state-ə qayıdaq
      if (!isFadingRef.current) {
        video.volume = volume;
      }
    }
  }, [isMuted]);

  // volume dəyişikliyini videoya ötür (fade yoxdursa)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isFadingRef.current) return;
    if (!isMuted) {
      video.volume = volume;
    }
  }, [volume, isMuted]);

  // playback rate sync
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = playbackRate;
  }, [playbackRate]);

  // autoplay + fade-in
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (autoPlay) {
      shouldFadeInNextPlayRef.current = fadeIn;
      // əvvəlcə səsi sıfıra endirək, sonra fade-in edəcəyik
      if (!isMuted) {
        video.volume = fadeIn ? 0 : volume;
      }
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [autoPlay, activeSourceIndex, fadeIn, volume, isMuted]);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration || 0);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isScrubbing) return;

    const ct = video.currentTime;
    const dur = video.duration || 0;
    setCurrentTime(ct);
    setDuration(dur);
    setProgress(dur ? ct / dur : 0);
  };

  const handlePlayInternal = () => {
    setIsPlaying(true);

    const video = videoRef.current;
    if (!video) return;

    // Fade-in aktivləşdirmə
    if (fadeIn && shouldFadeInNextPlayRef.current && !isMuted && volume > 0) {
      shouldFadeInNextPlayRef.current = false;
      startFade(0, volume, fadeDurationMs);
    } else if (!isMuted && !isFadingRef.current) {
      // normal play
      video.volume = volume;
    }
  };

  const handlePauseInternal = () => {
    setIsPlaying(false);
    // burada xüsusi iş görmürük, çünki fadeOut togglePlay içində həll olunur
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      // PLAY
      shouldFadeInNextPlayRef.current = fadeIn;
      if (fadeIn && !isMuted && volume > 0) {
        video.volume = 0;
      }
      video
        .play()
        .then(() => {
          // onPlay event-də fade-in baş verəcək
        })
        .catch(() => setIsPlaying(false));
    } else {
      // PAUSE
      if (fadeOut && !isMuted && volume > 0) {
        const currentVol = video.volume;
        startFade(currentVol, 0, fadeDurationMs, () => {
          video.pause();
        });
      } else {
        video.pause();
      }
    }
  };

  const toggleMute = () => {
    clearFade();
    setIsMuted((prev) => !prev);
  };

  const handleVolumeChange = (value: number) => {
    const v = Math.min(1, Math.max(0, value));
    clearFade();
    setVolume(v);
    if (v === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };

  const handleProgressChange = (value: number) => {
    const video = videoRef.current;
    if (!video) return;

    const clamped = Math.min(1, Math.max(0, value));
    setProgress(clamped);
    const newTime = (duration || video.duration || 0) * clamped;
    setCurrentTime(newTime);
    video.currentTime = newTime;
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsScrubbing(true);
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const value = x / rect.width;
    handleProgressChange(value);
  };

  const handleProgressMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isScrubbing) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const value = x / rect.width;
    handleProgressChange(value);
  };

  const handleProgressMouseUp = () => {
    setIsScrubbing(false);
  };

  const toggleFullscreen = useCallback(() => {
    if (typeof document === "undefined") return;
    const container = containerRef.current;

    if (!container) return;

    if (!document.fullscreenElement) {
      container
        .requestFullscreen?.()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document
        .exitFullscreen?.()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key.toLowerCase()) {
      case " ":
      case "k":
        e.preventDefault();
        togglePlay();
        break;
      case "m":
        toggleMute();
        break;
      case "f":
        toggleFullscreen();
        break;
      case "arrowright": {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = Math.min(video.currentTime + 5, duration);
        break;
      }
      case "arrowleft": {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = Math.max(video.currentTime - 5, 0);
        break;
      }
      case "arrowup":
        e.preventDefault();
        handleVolumeChange(volume + 0.05);
        break;
      case "arrowdown":
        e.preventDefault();
        handleVolumeChange(volume - 0.05);
        break;
      default:
        break;
    }
  };

  const handleSourceChange = (index: number) => {
    if (index === activeSourceIndex) return;
    const video = videoRef.current;
    const currentTimeSnapshot = video?.currentTime ?? 0;
    const wasPlaying = isPlaying;

    setActiveSourceIndex(index);

    setTimeout(() => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = currentTimeSnapshot;
      if (wasPlaying) {
        shouldFadeInNextPlayRef.current = fadeIn;
        if (fadeIn && !isMuted && volume > 0) {
          v.volume = 0;
        }
        v.play().catch(() => {});
      }
    }, 0);
  };

  // const currentSource = sources[activeSourceIndex];

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative flex flex-col bg-black/90 rounded-xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
        className
      )}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Video */}
      <div className="relative bg-black">
        <video
          ref={videoRef}
          className="w-full h-full max-h-[70vh] object-contain bg-black"
          poster={poster}
          loop={loop}
          onClick={togglePlay}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onPlay={handlePlayInternal}
          onPause={handlePauseInternal}
        >
          {sources.map((source, idx) => (
            <source
              key={source.src + idx}
              src={source.src}
              type={source.type ?? "video/mp4"}
            />
          ))}
          Your browser does not support the video tag.
        </video>

        {/* Center play overlay */}
        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 fill-black"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="relative flex flex-col gap-2 bg-gradient-to-t from-black/90 via-black/80 to-black/60 px-3 pb-3 pt-2 text-white">
        {/* Progress bar */}
        <div
          className="group relative h-2 w-full cursor-pointer rounded-full bg-white/15"
          onMouseDown={handleProgressMouseDown}
          onMouseMove={handleProgressMouseMove}
          onMouseUp={handleProgressMouseUp}
          onMouseLeave={handleProgressMouseUp}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gray-500 group-hover:bg-gray-400"
            style={{ width: `${progress * 100}%` }}
          />
          <div
            className="absolute -top-1.5 h-5 w-5 -translate-x-1/2 rounded-full bg-white shadow group-hover:scale-100 transition-transform"
            style={{
              left: `${progress * 100}%`,
              transform: "translate(-50%, 0)",
            }}
          />
        </div>

        {/* Main control row */}
        <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
          {/* Left controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Play / Pause */}
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              {isPlaying ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-white"
                  aria-hidden="true"
                >
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-white"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Mute / Volume */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={toggleMute}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                {isMuted || volume === 0 ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M16.5 12l3.5-3.5-1.5-1.5L15 10.5 11.5 7 10 8.5 13.5 12 10 15.5 11.5 17 15 13.5l3.5 3.5 1.5-1.5zM5 9v6h4l5 5V4L9 9H5z" />
                  </svg>
                ) : volume < 0.5 ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M7 9v6h4l5 5V4l-5 5H7z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M7 9v6h4l5 5V4l-5 5H7zm8.5 3a4.5 4.5 0 00-2.5-4.06v8.12A4.5 4.5 0 0015.5 12z" />
                  </svg>
                )}
              </button>

              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="h-1 w-20 cursor-pointer accent-gray-500 sm:w-24"
              />
            </div>

            {/* Time */}
            <div className="hidden items-center gap-1 text-[11px] text-white/80 sm:flex">
              <span>{formatTime(currentTime)}</span>
              <span className="text-white/40">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quality selector */}
            {sources.length > 1 && (
              <select
                value={activeSourceIndex}
                onChange={(e) => handleSourceChange(Number(e.target.value))}
                className="rounded-md bg-white/5 px-2 py-1 text-[11px] sm:text-xs outline-none hover:bg-white/10"
              >
                {sources.map((s, idx) => (
                  <option key={s.src} value={idx}>
                    {s.label ?? `Source ${idx + 1}`}
                  </option>
                ))}
              </select>
            )}

            {/* Playback rate */}
            <select
              value={playbackRate}
              onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
              className="rounded-md bg-white/5 px-2 py-1 text-[11px] sm:text-xs outline-none hover:bg-white/10"
            >
              {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                <option key={rate} value={rate}>
                  {rate}x
                </option>
              ))}
            </select>

            {/* Fullscreen */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              {isFullscreen ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-white"
                  aria-hidden="true"
                >
                  <path d="M6 14H4v6h6v-2H6v-4zm0-4h4V4h2v6H6V6H4v4zm14 4h-4v4h-4v2h6v-6zm-4-4V4h-6v2h4v4h2z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-white"
                  aria-hidden="true"
                >
                  <path d="M7 7h4V5H5v6h2V7zm6-2v2h4v4h2V5h-6zm4 12h-4v2h6v-6h-2v4zM7 13H5v6h6v-2H7v-4z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile time display */}
        <div className="flex items-center justify-end gap-1 text-[11px] text-white/80 sm:hidden">
          <span>{formatTime(currentTime)}</span>
          <span className="text-white/40">/</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
