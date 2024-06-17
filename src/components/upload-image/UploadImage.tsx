import React from "react"
import { ErrorMessage } from "../error-message/ErrorMessage"
import { Control, RegisterOptions } from "react-hook-form"

export type UploadImageProps = {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileName?: string
  name: string
  rules?:
    | Omit<
        RegisterOptions<any, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined
  error?: string
  control: Control<any>
  required?: boolean | string
}

export const UploadImage: React.FC<UploadImageProps> = ({
  handleFileChange,
  fileName,
  name,
  error
}) => {
  return (
    <div>
      <div className="flex">
        <input
          id={name}
          type="file"
          name={name}
          accept="image/jpeg, image/jpg"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor={name}
          className={`border-[1px] border-black rounded-tl rounded-bl p-4 text-center cursor-pointer ${error ? "border-red-500" : ""}`}
        >
          Upload
        </label>
        <label
          htmlFor={name}
          className={`w-full border-[1px] border-[#D0CFCF] rounded-tr rounded-br p-4 text-center cursor-pointer text-[#7E7E7E] ${error ? "border-red-500" : ""}`}
        >
          {!fileName ? "Upload your photo" : fileName}
        </label>
      </div>
      <ErrorMessage error={error} />
    </div>
  )
}
