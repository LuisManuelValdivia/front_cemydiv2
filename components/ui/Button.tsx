//components/ui/Button.tsx
import { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"secondary"|"ghost" }
export default function Button({ variant="primary", className="", ...props }: Props){
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition"
  const map = {
    primary: "bg-brand text-white hover:bg-brand-hover disabled:opacity-50",
    secondary: "bg-secondary text-white hover:bg-secondary-hover disabled:opacity-50",
    ghost: "hover:bg-neutral-gray/10",
  } as const
  return <button {...props} className={`${base} ${map[variant]} ${className}`} />
}
