import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-[14px] px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6260]/35 disabled:cursor-not-allowed disabled:opacity-55";

  const map = {
    primary:
      "bg-[#1e6260] text-white shadow-[0_10px_22px_rgba(15,61,59,0.2)] hover:bg-[#18514f] hover:-translate-y-0.5",
    secondary: "bg-[#2ba2a1] text-white hover:bg-[#238f8f]",
    ghost: "border border-[#d6e5e5] bg-white text-[#1e6260] hover:bg-[#f3f8f8]",
  } as const;

  return <button {...props} className={`${base} ${map[variant]} ${className}`} />;
}
