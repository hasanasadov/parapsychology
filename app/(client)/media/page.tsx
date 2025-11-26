"use client";

const items = [
  {
    id: "1",
    img: "para1.jpg",
    height: 400,
  },
  {
    id: "2",
    img: "para2.jpg",
    height: 250,
  },
  {
    id: "3",
    img: "para3.jpg",
    height: 600,
  },

  {
    id: "5",
    img: "para5.jpg",
    height: 250,
  },
  {
    id: "6",
    img: "para6.jpg",
    height: 600,
  },
  {
    id: "4",
    img: "para4.jpg",
    height: 400,
  },
  {
    id: "7",
    img: "para7.jpg",
    height: 400,
  },
  {
    id: "8",
    img: "para8.jpg",
    height: 250,
  },

  {
    id: "10",
    img: "para10.jpg",
    height: 600,
  },
  {
    id: "9",
    img: "para9.jpg",
    height: 600,
  },
];

import Masonry from "@/components/gsap/Masonry";
import VideoPlayer from "@/components/shared/VideoPlayer";
import React from "react";

const MediaPage = () => {
  return (
    <div className="my-4 container mx-auto x-4">
      <div className="w-full py-4">
        {/* <video className="w-full" src="/para7-video.mp4" autoPlay loop muted></video> */}
        <VideoPlayer
          poster="/para1.jpg"
          sources={[
            {
              src: "/para7-video.mp4",
              label: "1080p",
              type: "video/mp4",
            },
          ]}
          autoPlay={true}
          loop={false}
          initialVolume={0.8}
          defaultPlaybackRate={1}
        />
      </div>
      <div className="min-h-screen">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </div>
  );
};

export default MediaPage;
