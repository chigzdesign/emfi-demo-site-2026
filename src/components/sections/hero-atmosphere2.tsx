import { BrandSign } from "@/components/brand/logo";

function OrbitSign({
  orbit,
  size,
  opacity,
}: {
  orbit: "emfi-sign-orbit-a" | "emfi-sign-orbit-b";
  size: string;
  opacity: string;
}) {
  return (
    <div className={`emfi-sign-orbit ${orbit} flex items-center justify-center ${opacity}`}>
      <BrandSign className={`${size} emfi-sign-mark`} />
    </div>
  );
}

export function HeroAtmosphere2({
  compact = false,
  sign = true,
}: {
  compact?: boolean;
  sign?: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-page" />
      <div className="emfi-hero-bg-shift absolute inset-0" />
      <div className="emfi-hero-glow-tl absolute inset-0" />
      <div className="emfi-hero-glow-br absolute inset-0" />
      {compact ? (
        sign ? (
          <div className="absolute right-[5%] bottom-[10%] text-[var(--color-blue-100)]">
            <div className="relative flex h-[280px] w-[280px] items-center justify-center [perspective:1800px]">
              <OrbitSign orbit="emfi-sign-orbit-a" size="h-[280px] w-[280px]" opacity="opacity-[0.22]" />
            </div>
          </div>
        ) : null
      ) : (
        <>

        </>
      )}
    </div>
  );
}
