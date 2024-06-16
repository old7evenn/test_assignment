import React from "react";


export type ButtonProps = {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined
  onClick?: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  type,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      color={color}
      className={`flex hover:bg-[#FFE302] transition-colors px-5 py-1 justify-center items-center rounded-3xl mx-auto disabled:opacity-50 disabled:cursor-not-allowed ${disabled ? "bg-[#B4B4B4]" : "bg-[#F4E041]"}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
