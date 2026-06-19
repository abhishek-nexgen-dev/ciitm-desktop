import React, { useEffect, useRef, useState, KeyboardEvent } from "react";
import { FaChevronDown } from "react-icons/fa";
import clsx from "clsx";

type DropDownProps = {
  options: string[];
  label?: string;
  error?: string;
  onSelect: (option: string) => void;
  className?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
};

const DropDown: React.FC<DropDownProps> = ({
  options,
  onSelect,
  className = "",
  label,
  value,
  placeholder = "Select an option",
  disabled = false,
  error,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayedValue = value !== undefined ? value : (options[0] ?? "");

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const handleSelect = (opt: string) => {
    if (disabled) return;

    onSelect(opt);
    setOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        setOpen((prev) => !prev);
        break;

      case "Escape":
        setOpen(false);
        break;

      case "ArrowDown":
        if (!open) setOpen(true);
        break;
    }
  };

  return (
    <div ref={containerRef} className={clsx("space-y-2 relative w-full", className)}>
      {label && (
        <label
          className="
            block
            text-xs
            uppercase
            tracking-[0.2em]
            text-zinc-500
          "
        >
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => !disabled && setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        disabled={disabled || options.length === 0}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={clsx(
          `
          flex
          h-12
          w-full
          items-center
          justify-between
          gap-3
          rounded-lg
          border
          bg-zinc-900/50
          px-4
          text-sm
          transition-all
          outline-none
          `,
          error ? "border-red-500" : "border-zinc-800 focus-within:border-blue-500",
          !error && "focus-within:ring-2 focus-within:ring-blue-500/20",
          disabled && "cursor-not-allowed opacity-60",
        )}
      >
        <span
          className={clsx(
            "flex-1 truncate text-left",
            displayedValue ? "text-zinc-100" : "text-zinc-600",
          )}
        >
          {displayedValue || placeholder}
        </span>

        <FaChevronDown
          className={clsx(
            "shrink-0 text-zinc-500 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && options.length > 0 && (
        <ul
          role="listbox"
          className="
            absolute
            z-20
            mt-2
            w-full
            max-h-60
            overflow-y-auto
            rounded-lg
            border
            border-zinc-800
            bg-zinc-900
            shadow-lg
          "
        >
          {options.map((opt) => {
            const isSelected = displayedValue === opt;

            return (
              <li key={opt} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className={clsx(
                    `
                    w-full
                    px-4
                    py-3
                    text-left
                    text-sm
                    transition-colors
                    `,
                    isSelected ? "bg-blue-500/10 text-blue-400" : "text-zinc-200 hover:bg-zinc-800",
                  )}
                >
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default DropDown;
