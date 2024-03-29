import { ErrorMessage } from "@hookform/error-message"
import clsx from "clsx"
import React, { useImperativeHandle } from "react"
import { get } from "react-hook-form"

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "placeholder"
> & {
  label: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, errors, touched, required, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => inputRef.current!)

    const hasError = get(errors, name) && get(touched, name)

    return (
      <div>
        <div className="relative z-0 w-full text-base-regular input-box">
          <input
            type="text"
            name={name}
            placeholder=" "
            className={clsx(
              `pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none apply-font-sans focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200`,
              {
                "border-rose-500 focus:border-rose-500": hasError,
              }
            )}
            {...props}
            ref={inputRef}
          />
          <label
            htmlFor={name}
            onClick={() => inputRef.current?.focus()}
            className={clsx(
              "mx-3 px-1 transition-all absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
              {
                "!text-rose-500": hasError,
              }
            )}
          >
            {label}
            {required && <span className="text-rose-500">*</span>}
          </label>
        </div>
        {
          hasError && (
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => {
                return (
                  <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
                    <span>{message}</span>
                  </div>
                )
              }}
            />
          )
        }
      </div >
    )
  }
)

Input.displayName = "Input"

export default Input