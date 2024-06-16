import { Checked } from "@/assets/icons/checked"
import React from "react"

type RadioButtonProps = {
  id: string
  value: number
  onChange?: (...event: any[]) => void
  onBlur?: () => void
  name: string
  checked?: boolean
  label: string
  type: React.HTMLInputTypeAttribute | undefined
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  label,
  type,
  onChange,
  value,
  checked,
}) => {
  return (
    <li className="flex items-center gap-3">
      <label
        className="relative flex items-center rounded-full cursor-pointer"
        htmlFor={id}
        data-ripple-dark="true"
      >
        <input
          name={name}
          type={type}
          checked={checked}
          value={value}
          onChange={onChange}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[00BDD3] text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#00BDD3] checked:before:bg-[#00BDD3] hover:before:opacity-10"
          id={id}
        />
        <span className="absolute text-[#00BDD3] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <Checked />
        </span>
      </label>
      <label
        className="mt-px font-light text-gray-700 cursor-pointer select-none"
        htmlFor={id}
      >
        {label}
      </label>
    </li>
  )
}

