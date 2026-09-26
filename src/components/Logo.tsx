import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Pacific Floors and Coatings home"
    >
      <img
        src="/pacific-fooring.png"
        width={2170}
        height={725}
        alt="Pacific Floors and Coatings"
        className="h-12 w-auto max-w-[180px] object-contain sm:h-14"
      />
    </Link>
  );
}
