import RenderIf from "@/utils/RenderIf";

type Props = {
  isEditing: boolean;
  issuedAt: Date;
  originalIssuedAt: Date;
  setIssuedAt: (val: Date) => void;
};

export const DateSection = ({
  isEditing,
  issuedAt,
  originalIssuedAt,
  setIssuedAt,
}: Props) => {
  // originalIssuedAt-i təhlükəsiz parse etmək
  const parseDate = (val: Date) => {
    if (val instanceof Date) return val;

    const str = String(val);
    const direct = new Date(str);
    if (!Number.isNaN(direct.getTime())) return direct;

    // əgər format "YYYY-MM" kimidirsə
    if (/^\d{4}-\d{2}$/.test(str)) {
      const fallback = new Date(`${str}-01`);
      if (!Number.isNaN(fallback.getTime())) return fallback;
    }

    return new Date();
  };

  const start = parseDate(originalIssuedAt);

  const year = start.getFullYear();
  const month = String(start.getMonth() + 1).padStart(2, "0");
  const day = String(start.getDate()).padStart(2, "0");
  const formattedDisplay = `${day}.${month}.${year}`;

  // input üçün dəyər (type="month" -> "YYYY-MM")
  const inputValue =
    issuedAt instanceof Date ? issuedAt.toISOString().slice(0, 7) : "";

  return (
    <section className="w-full text-left">
      <div className="rounded-xl border border-white/5 bg-slate-900/70 px-3 py-3 md:px-4 md:py-3.5 shadow-sm flex flex-col gap-2">
        {/* Label + status */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.16em] uppercase text-gray-400">
            Issued at
          </span>

          <RenderIf condition={!isEditing}>
            <span className="text-[10px] md:text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              Saved
            </span>
          </RenderIf>
        </div>

        {/* EDIT MODE */}
        <RenderIf condition={isEditing}>
          <div className="flex flex-col gap-1">
            <input
              type="date"
              value={inputValue}
              onChange={(e) => setIssuedAt(new Date(e.target.value))}
              className="outline-none rounded-lg bg-slate-950/60 border border-white/10 px-3 py-2 text-sm md:text-[15px] text-cyan-200 focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60 transition-all w-[9.5rem] md:w-[11rem]"
            />
            <p className="text-[11px] text-gray-500">
              Ay və ili seç (məs: 2024-11).
            </p>
          </div>
        </RenderIf>

        {/* VIEW MODE */}
        <RenderIf condition={!isEditing}>
          <p className="text-[15px] md:text-[16px] font-medium text-gray-100">
            {formattedDisplay}
          </p>
        </RenderIf>
      </div>
    </section>
  );
};
