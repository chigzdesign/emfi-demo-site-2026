import { about } from "@/content/about";

const placeholderPhoto = "/people/placeholder.svg";

export function PersonCard({
  person,
}: {
  person: (typeof about.people)[number];
}) {
  const photo = "photo" in person && person.photo ? person.photo : placeholderPhoto;

  return (
    <article
      tabIndex={0}
      className="emfi-person-card group relative h-full min-h-[300px] cursor-pointer overflow-hidden bg-page outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-focus"
    >
      <div className="emfi-person-card-front flex h-full min-h-[300px] flex-col items-center px-6 py-8 text-center">
        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full bg-subtle [clip-path:circle(50%)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt=""
            width={112}
            height={112}
            className="block h-full w-full object-cover object-[center_20%] [clip-path:circle(50%)]"
          />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-ink">{person.name}</h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
          {person.role}
        </p>
        <p className="sr-only">{person.description}</p>
        {"board" in person && person.board ? (
          <p className="mt-4 inline-block border border-brand/25 bg-soft px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-brand">
            {about.boardLabel}
          </p>
        ) : null}
      </div>
      <div
        aria-hidden
        className="emfi-person-card-back absolute inset-0 flex flex-col justify-center bg-ink px-6 py-7"
      >
        <p className="text-[13px] font-medium leading-6 text-ink-inverse">
          {person.description}
        </p>
      </div>
    </article>
  );
}
