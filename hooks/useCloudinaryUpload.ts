"use client";
import { useCallback, useState } from "react";

export function useCloudinaryUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const canUpload = Boolean(cloudName && preset);

  const upload = useCallback(
    (file: File) => {
      return new Promise<string>((resolve, reject) => {
        setError(null);
        if (!canUpload) {
          setError("Cloudinary konfiqurasiyası tapılmadı.");
          reject(new Error("Missing Cloudinary env"));
          return;
        }
        const form = new FormData();
        form.append("file", file);
        form.append("upload_preset", preset as string);

        const xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`
        );

        setUploading(true);
        setProgress(0);

        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable)
            setProgress(Math.round((e.loaded * 100) / e.total));
        };
        xhr.onload = () => {
          setUploading(false);
          try {
            const res = JSON.parse(xhr.responseText);
            if (res.secure_url) return resolve(res.secure_url);
            setError("Yükləmə uğursuz oldu.");
            reject(new Error("Upload failed"));
          } catch (err) {
            setError("Gözlənilməyən cavab.");
            reject(err);
          }
        };
        xhr.onerror = () => {
          setUploading(false);
          setError("Şəbəkə xətası baş verdi.");
          reject(new Error("Network error"));
        };
        xhr.send(form);
      });
    },
    [canUpload, cloudName, preset]
  );

  return { upload, uploading, progress, error, setError, canUpload };
}


// const { upload, uploading, progress, error, canUpload, setError } =
//     useCloudinaryUpload();
//   const [drag, setDrag] = useState<boolean>(false);

//   async function handleFile(file?: File | null) {
//     if (!file) return;
//     try {
//       const localUrl = URL.createObjectURL(file);
//       onChange({
//         ...value,
//         file: { url: localUrl, name: file.name, mime: file.type },
//       });
//       const url = await upload(file);
//       onChange({ ...value, file: { url, name: file.name, mime: file.type } });
//       setTimeout(() => URL.revokeObjectURL(localUrl), 30000);
//     } catch {
//       /* ignore */
//     }
//   }


// <div className="flex flex-col sm:flex-row gap-2">
//         <Input
//           placeholder="https://… (şəkil, video, musiqi, sənəd)"
//           value={value.file.url}
//           onChange={(e) =>
//             onChange({ ...value, file: { ...value.file, url: e.target.value } })
//           }
//         />
//         <button
//           type="button"
//           onClick={() => {
//             if (!canUpload) return;
//             const input = document.createElement("input");
//             input.type = "file";
//             input.accept = "*/*";
//             input.onchange = () => handleFile(input.files?.[0] || null);
//             input.click();
//           }}
//           disabled={!canUpload}
//           className="shrink-0 rounded-xl border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
//           title={canUpload ? "Yüklə" : "Cloudinary env tələb olunur"}
//         >
//           Yüklə
//         </button>
//       </div>

//       <div
//         onDragOver={(e) => {
//           e.preventDefault();
//           setDrag(true);
//         }}
//         onDragLeave={() => setDrag(false)}
//         onDrop={(e) => {
//           e.preventDefault();
//           setDrag(false);
//           handleFile(e.dataTransfer?.files?.[0]);
//         }}
//         className={cn(
//           "rounded-xl p-6 text-center transition border-2 border-dashed",
//           drag
//             ? "border-indigo-500 bg-indigo-50/70 dark:bg-indigo-900/20"
//             : "border-gray-300 dark:border-gray-600"
//         )}
//       >
//         {canUpload
//           ? "Sürüklə və burax, ya da yuxarıdan yüklə"
//           : "Cloudinary env tələb olunur"}
//       </div>

//       {uploading && (
//         <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
//           <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
//             <div
//               className="bg-indigo-600 h-2 rounded-full transition-all"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//           <span>{progress}%</span>
//         </div>
//       )}
//       {error && (
//         <div
//           className="text-xs text-red-600 dark:text-red-300"
//           onAnimationEnd={() => setError(null)}
//         >
//           {error}
//         </div>
//       )}