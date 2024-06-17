import React from "react"
import { Control, RegisterOptions, useController } from "react-hook-form"
import { ErrorMessage } from "../error-message/ErrorMessage"

type InputProps = {
  name: string
  placeholder?: string | undefined
  type?: string | undefined
  control: Control<any>
  required?: boolean | string
  rules?:
    | Omit<
        RegisterOptions<any, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined
  endContent?: JSX.Element | undefined
  errorMessage?: string
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type = "text",
  control,
  required = false,
  rules = {},
  endContent,
  errorMessage,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required,
      ...rules,
    },
  })

  return (
    <div className="flex flex-col">
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={field.value}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        className={`p-4 border border-[#D0CFCF] rounded focus:outline-none ${
          error ? "border-red-500" : ""
        }`}
      />
      <ErrorMessage error={errorMessage || error?.message} />
      {endContent}
    </div>
  )
}
