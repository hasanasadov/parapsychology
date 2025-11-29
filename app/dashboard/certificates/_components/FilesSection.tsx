import { Button } from "@/components/ui/button";
import RenderIf from "@/utils/RenderIf";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "sonner";

type Props = {
  isEditing: boolean;
  fileUrls: string[];
  setFileUrls: (val: string[]) => void;
  originalFileUrls: string[];
};

export const FilesSection = ({
  isEditing,
  fileUrls,
  setFileUrls,
  originalFileUrls,
}: Props) => {
  const handleTextChange = (value: string) => {
    const urls = value
      .split(",")
      .map((url) => url.trim())
      .filter((url) => url !== "");
    setFileUrls(urls);
  };

  const handleRemoveIndex = (index: number) => {
    setFileUrls(fileUrls.filter((_, i) => i !== index));
  };

  const joinedFileUrls = fileUrls.join(", ");
  const hasFiles = originalFileUrls && originalFileUrls.length > 0;

  return (
    <section className="w-full text-left">
      <div className="rounded-xl border border-white/5 bg-slate-900/70 px-3 py-3.5 md:px-4 md:py-4 shadow-sm space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.16em] uppercase text-gray-400">
            Certificate files
          </span>

          <RenderIf condition={isEditing}>
            <span className="text-[10px] md:text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              Upload & edit
            </span>
          </RenderIf>

          <RenderIf condition={!isEditing && hasFiles}>
            <span className="text-[10px] md:text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              {originalFileUrls.length} file
              {originalFileUrls.length > 1 ? "s" : ""}
            </span>
          </RenderIf>
        </div>

        {/* EDIT MODE */}
        <RenderIf condition={isEditing}>
          <div className="space-y-3 md:space-y-4">
            {/* Manual URLs input */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-medium">
                File URLs
                <span className="ml-1 text-[10px] text-gray-500">
                  (vergüllə ayır)
                </span>
              </label>
              <textarea
                rows={2}
                value={joinedFileUrls}
                onChange={(e) => handleTextChange(e.target.value)}
                className="w-full text-[13px] md:text-[14px] rounded-xl bg-slate-950/60 border border-white/10 px-3 py-2.5 text-gray-200 outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60 transition-all placeholder:text-gray-500 resize-none"
                placeholder="https://..., https://..."
              />
            </div>

            {/* Upload actions */}
            <div className="w-fit flex md:flex-row items-start md:items-center justify-center gap-3 md:gap-4">
              <UploadButton
                className="!text-white"
                endpoint="pdfUploader"
                disabled={!isEditing}
                onClientUploadComplete={(res) => {
                  const newUrls =
                    res
                      ?.map((file) => file?.ufsUrl)
                      .filter((url): url is string => !!url) || [];

                  if (!newUrls.length) return;

                  // Burada mövcud faylların üstünə əlavə edirik
                  setFileUrls([...fileUrls, ...newUrls]);
                  console.log("Files: ", res);
                  toast.message(`${newUrls.length} fayl yükləndi`);
                }}
                onUploadProgress={(progress) => {
                  console.log("Upload Progress: ", progress);
                }}
                appearance={{
                  button:
                    "glass-button p-3 md:p-4 !text-white dark:!text-white text-sm md:text-[14px]",
                  container: "w-full md:w-auto",
                  allowedContent:
                    "text-xs md:text-[11px] text-gray-500 mt-1 md:mt-0",
                }}
                onUploadError={(error: Error) => {
                  toast.error(`ERROR! ${error.message}`);
                }}
              />
              <div className="flex items-center justify-center flex-col">
                <Button
                  variant="custom"
                  className="text-red-400 hover:text-red-300 glass-button p-3 md:p-4 ! text-sm md:text-[14px]"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Bütün faylları silmək istədiyinizə əminsiniz?"
                      )
                    ) {
                      setFileUrls([]);
                      toast.success("Bütün fayllar silindi");
                    }
                  }}
                  disabled={!isEditing || fileUrls.length === 0}
                >
                  Hamısını sil
                </Button>
                <p className="text-xs md:text-[11px] text-gray-500 !mt-1 md:mt-0">
                  Faylların hamısını sil
                </p>
              </div>
            </div>

            {/* Previews (edit mode) */}
            <RenderIf condition={!!fileUrls.length}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {fileUrls.map((url, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg bg-slate-950/40 p-2 flex flex-col gap-2"
                  >
                    <div className="w-full aspect-[3/4] overflow-hidden rounded-md border border-white/10">
                      <iframe src={url} className="w-full h-full"></iframe>
                    </div>
                    <p className="text-[11px] text-gray-400 break-all line-clamp-2">
                      {url}
                    </p>
                    <Button
                      variant="ghost"
                      className="self-end text-[11px] text-red-400 hover:text-red-300 hover:bg-red-500/10 px-2 py-1"
                      onClick={() => handleRemoveIndex(index)}
                    >
                      Sil
                    </Button>
                  </div>
                ))}
              </div>
            </RenderIf>
          </div>
        </RenderIf>

        {/* VIEW MODE */}
        <RenderIf condition={!isEditing && hasFiles}>
          <div className="space-y-2">
            <p className="text-[11px] md:text-[12px] text-gray-400">
              Aşağıda bu sertifikata bağlı fayllar var:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {originalFileUrls.map((url, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg bg-slate-950/40 p-2 flex flex-col gap-2"
                >
                  <div className="w-full aspect-[3/4] overflow-hidden rounded-md border border-white/10">
                    <iframe src={url} className="w-full h-full"></iframe>
                  </div>
                  <p className="text-[11px] text-gray-400 break-all line-clamp-2">
                    {url}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RenderIf>

        <RenderIf condition={!isEditing && !hasFiles}>
          <p className="text-[12px] text-gray-500">
            Bu sertifikat üçün hər hansı fayl əlavə edilməyib.
          </p>
        </RenderIf>
      </div>
    </section>
  );
};
