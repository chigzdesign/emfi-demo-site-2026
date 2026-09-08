export function HeroRings() {
  return (
    <div className="relative aspect-square h-full max-h-full w-auto max-w-full" aria-hidden>
      <svg
        className="emfi-ring-a absolute inset-[-10%] h-[120%] w-[120%] text-brand opacity-[0.24]"
        viewBox="0 0 640 640"
        fill="none"
      >
        <ellipse
          cx="320"
          cy="320"
          rx="250"
          ry="138"
          stroke="currentColor"
          strokeWidth="22"
        />
        <ellipse
          cx="320"
          cy="320"
          rx="188"
          ry="250"
          stroke="currentColor"
          strokeWidth="12"
          opacity="0.45"
        />
      </svg>
      <svg
        className="emfi-ring-b absolute top-[12%] left-[-12%] h-[60%] w-[60%] text-brand opacity-[0.16]"
        viewBox="0 0 420 420"
        fill="none"
      >
        <ellipse
          cx="210"
          cy="210"
          rx="168"
          ry="92"
          stroke="currentColor"
          strokeWidth="16"
        />
      </svg>
    </div>
  );
}
