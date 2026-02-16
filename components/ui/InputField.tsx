//components/ui/InputField.tsx.tsx

import { InputHTMLAttributes, ReactNode } from "react"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  hint?: string
  error?: string
  right?: ReactNode
  id: string
}

export default function InputField({ label, hint, error, id, right, ...rest }: Props){
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium">{label}</label>
      <div className="flex rounded-xl border focus-within:ring-2 focus-within:ring-brand/40">
        <input id={id} aria-describedby={describedBy} aria-invalid={!!error} className="flex-1 px-3 py-2 rounded-l-xl outline-none" {...rest}/>
        {right ? <div className="px-3 py-2 rounded-r-xl">{right}</div> : null}
      </div>
      {hint && !error && <p id={`${id}-hint`} className="text-xs text-neutral-gray">{hint}</p>}
      {error && <p id={`${id}-error`} className="text-xs text-state-error">{error}</p>}
    </div>
  )
}
