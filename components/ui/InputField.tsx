import { InputHTMLAttributes, ReactNode } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
  right?: ReactNode;
  id: string;
};

export default function InputField({ label, hint, error, id, right, ...rest }: Props) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-[#1f2937]">
        {label}
      </label>
      <div
        className={`flex rounded-[14px] border bg-white transition focus-within:border-[#2ba2a1] focus-within:ring-2 focus-within:ring-[#2ba2a1]/20 ${
          error ? "border-red-300" : "border-[#d6e5e5]"
        }`}
      >
        <input
          id={id}
          aria-describedby={describedBy}
          aria-invalid={!!error}
          className="h-11 flex-1 rounded-l-[14px] bg-transparent px-3.5 text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
          {...rest}
        />
        {right ? <div className="rounded-r-[14px] px-3 py-2">{right}</div> : null}
      </div>
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-[#6b7280]">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-[#dc2626]">
          {error}
        </p>
      )}
    </div>
  );
}
