import { BrandSign } from "@/components/brand/logo";

export function HeroAtmosphere({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-page" />
      {compact ? (
        <>
          <div className="emfi-at-drift-a absolute right-[6%] bottom-[6%] text-[#d1d6d8] opacity-15">
            <BrandSign className="h-[350px] w-[350px]" />
          </div>
          <div className="emfi-at-drift-c absolute right-[25%] bottom-[10%] text-[#d1d6d8] opacity-20">
            <BrandSign className="h-[180px] w-[180px]" />
          </div>
        </>
      ) : (
        <>
          <div className="emfi-at-drift-a absolute -left-10 top-[2%] text-[#d1d6d8] opacity-20">
            <BrandSign className="h-[350px] w-[350px]" />
          </div>
          <div className="emfi-at-drift-b absolute right-[-5%] top-[35%] text-[#d1d6d8] opacity-20">
            <BrandSign className="h-[300px] w-[300px]" />
          </div>
          <div className="emfi-at-drift-c absolute bottom-[2%] left-[37%] text-[#d1d6d8] opacity-20">
            <BrandSign className="h-[150px] w-[150px]" />
          </div>
          <div className="emfi-power-pulse absolute right-[5%] top-[2%] text-[#d1d6d8] opacity-25">
            <BrandSign className="h-[150px] w-[150px]" />
          </div>
          <svg
            className="absolute inset-0 h-full w-full text-[#d1d6d8]/70"
            viewBox="0 0 1200 640"
            fill="none"
          >
            <circle cx="220" cy="180" r="4" fill="currentColor" />
            <circle cx="780" cy="240" r="4" fill="currentColor" />
            <circle cx="980" cy="160" r="4" fill="currentColor" />
            <path
              d="M220 180 C 420 90, 620 320, 780 240"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="4 8"
            />
            <path
              d="M780 240 C 860 200, 920 140, 980 160"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="4 8"
            />
          </svg>
        </>
      )}
    </div>
  );
}
