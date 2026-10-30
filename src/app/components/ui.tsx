import type { ReactNode } from "react";

export function Arrow({
  diagonal = false,
  className = "h-5 w-5",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 ${className}`}
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M20 11.6a8 8 0 0 1-11.7 7.1L4 20l1.3-4.2A8 8 0 1 1 20 11.6Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M9 8c-.8 2.7 2 5.7 5 6l1-1.5-2-1-1 1c-1.4-.5-2.3-1.4-2.8-2.7l.8-.8L9 8Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export const whatsapp = (
  message = "Здравствуйте! Помогите выбрать десерт Cakes Muse к моему поводу.",
) => `https://wa.me/77070370720?text=${encodeURIComponent(message)}`;
export function ActionLink({
  children,
  href,
  light = false,
  className = "",
}: {
  children: ReactNode;
  href: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-13 items-center justify-between gap-8 rounded-sm px-6 py-4 text-[13px] font-medium transition-colors ${light ? "bg-cream text-ink hover:bg-[#e7ded2]" : "bg-wine text-white hover:bg-[#49272b]"} ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}
export function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-6 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[.18em] ${light ? "text-[#c5b4a2]" : "text-muted"}`}
    >
      <span>{number}</span>
      <span className={`h-px w-9 ${light ? "bg-[#81715f]" : "bg-line"}`} />
      {children}
    </p>
  );
}
export function Wordmark({
  className = "text-[35px]",
}: {
  className?: string;
}) {
  return (
    <span
      className={`font-display leading-none tracking-[-.065em] ${className}`}
    >
      cakes<span aria-hidden="true"> </span>muse
    </span>
  );
}
