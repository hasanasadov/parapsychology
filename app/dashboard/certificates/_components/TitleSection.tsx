import RenderIf from "@/utils/RenderIf";

type Props = {
  isEditing: boolean;
  code: string;
  fullName: string;
  courseName: string;
  fileUrls: string[];
  setCode: (val: string) => void;
  setFullName: (val: string) => void;
  setCourseName: (val: string) => void;
  setFileUrls: (val: string[]) => void;
  originalCode: string;
  originalFullName?: string | null;
  originalCourseName?: string | null;
  originalFileUrls: string[];
};

export const TitleSection = ({
  isEditing,
  code,
  fullName,
  courseName,
  fileUrls,
  setCode,
  setFullName,
  setCourseName,
  setFileUrls,
  originalCode,
  originalFullName,
  originalCourseName,
  originalFileUrls,
}: Props) => {
  const handleFileUrlsChange = (value: string) => {
    const urls = value
      .split(",")
      .map((url) => url.trim())
      .filter((url) => url !== "");
    setFileUrls(urls);
  };

  const joinedFileUrls = fileUrls?.join(", ");

  return (
    <section className="w-full text-left space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.16em] uppercase text-cyan-400/80">
          Certificate details
        </p>
        <RenderIf condition={isEditing}>
          <span className="text-[11px] md:text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            Editing
          </span>
        </RenderIf>
      </div>

      {/* EDIT MODE */}
      <RenderIf condition={isEditing}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Code */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-medium">Code</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full text-[14px] md:text-[15px] rounded-xl bg-slate-900/60 border border-white/5 px-3 py-2.5 text-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60 transition-all placeholder:text-gray-500"
                placeholder="Məs: CERT-2024-001"
              />
            </div>

            {/* Full name */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-medium">
                Full name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full text-[14px] md:text-[15px] rounded-xl bg-slate-900/60 border border-white/5 px-3 py-2.5 text-cyan-50 outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60 transition-all placeholder:text-gray-500"
                placeholder="Ad Soyad"
              />
            </div>
          </div>

          {/* Course name */}
          <div className="space-y-1">
            <label className="text-xs text-gray-400 font-medium">
              Course name
            </label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full text-[14px] md:text-[15px] rounded-xl bg-slate-900/60 border border-white/5 px-3 py-2.5 text-gray-100 outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60 transition-all placeholder:text-gray-500"
              placeholder="Kursun adı"
            />
          </div>

          {/* File URLs */}
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
              onChange={(e) => handleFileUrlsChange(e.target.value)}
              className="w-full text-[13px] md:text-[14px] rounded-xl bg-slate-900/60 border border-white/5 px-3 py-2.5 text-gray-200 outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60 transition-all placeholder:text-gray-500 resize-none"
              placeholder="https://..., https://..."
            />
          </div>
        </div>
      </RenderIf>

      {/* VIEW MODE */}
      <RenderIf condition={!isEditing}>
        <div className="space-y-3 md:space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Code */}
            <div className="space-y-0.5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500">
                Code
              </p>
              <p className="text-[15px] md:text-[16px] font-semibold text-cyan-300 break-words">
                {originalCode}
              </p>
            </div>

            {/* Full name */}
            <div className="space-y-0.5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500">
                Full name
              </p>
              <p className="text-[15px] md:text-[16px] text-gray-100 break-words">
                {originalFullName}
              </p>
            </div>
          </div>

          {/* Course name */}
          <div className="space-y-0.5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500">
              Course
            </p>
            <p className="text-[15px] md:text-[16px] text-gray-200 break-words">
              {originalCourseName}
            </p>
          </div>

          {/* File urls */}
          <div className="space-y-0.5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500">
              Files
            </p>
            <p className="text-[13px] md:text-[14px] text-gray-400 break-words">
              {originalFileUrls?.join(", ")}
            </p>
          </div>
        </div>
      </RenderIf>
    </section>
  );
};
