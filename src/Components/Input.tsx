import React, { forwardRef } from "react";
import clsx from "clsx";

type InputType = "text" | "email" | "password" | "number" | "url" | "tel" | "time";

interface InputProps {
  label?: string;
  name: string;

  placeholder?: string;
  value?: string | number;
  type?: InputType;

  onChange?: (name: string, value: string) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  error?: string | undefined;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  className?: string;
  inputClassName?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      placeholder,
      value,
      type = "text",
      onChange,
      onKeyDown,
      error,
      readonly = true,
      leftIcon,
      rightIcon,
      className,
      inputClassName,
      disabled,
      required,
    },
    ref,
  ) => {
    return (
      <div className={clsx("space-y-2", className)}>
        {label && (
          <label
            htmlFor={name}
            className="
              block
              text-xs
              uppercase
              tracking-[0.2em]
              text-zinc-500
            "
          >
            {label}
            {required && <span className="ml-1 text-red-400">*</span>}
          </label>
        )}

        <div
          className={clsx(
            `
            flex
            h-12
            items-center
            gap-3
            rounded-lg
            outline-none
            bg-transparent
           
            
            transition-all
            `,
            error ? "border-red-500" : "border-zinc-800 focus-within:border-blue-500",
            disabled && "cursor-not-allowed opacity-60",
            !error && "focus-within:ring-2 focus-within:ring-blue-500/20",
            !readonly && "bg-zinc-900/50  border p-4",
          )}
        >
          {leftIcon && <div className="shrink-0 text-zinc-500">{leftIcon}</div>}

          <input
            ref={ref}
            id={name}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            onKeyDown={onKeyDown}
            onChange={(e) => onChange?.(name, e.target.value)}
            className={clsx(
              `
              flex-1
              bg-transparent
              text-sm
              text-zinc-100
              placeholder:text-zinc-600
              outline-none
              `,
              inputClassName,
            )}
          />

          {rightIcon && <div className="shrink-0 text-zinc-500">{rightIcon}</div>}
        </div>

        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
