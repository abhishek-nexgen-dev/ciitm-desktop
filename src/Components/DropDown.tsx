import React, { useEffect, useRef, useState, KeyboardEvent } from "react";
import { FaChevronDown } from "react-icons/fa";

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

  // Use controlled value if provided, else fallback to first option or empty string
  const displayedValue = value !== undefined ? value : (options[0] ?? "");

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
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
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-gray-400">
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
        className={`
          w-full rounded-lg px-3 py-2 text-left flex justify-between items-center text-sm transition-all duration-150
          disabled:cursor-not-allowed disabled:opacity-50 border
          bg-black text-gray-200
          ${error ? "border-red-600" : "border-gray-700 focus:border-gray-500"}
          outline-none
         
        `}
      >
        <span className={`truncate ${!displayedValue ? "text-gray-500" : ""}`}>
          {displayedValue || placeholder}
        </span>
        <FaChevronDown
          className={`ml-2 shrink-0 transition-transform duration-150 text-gray-400 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && options.length > 0 && (
        <ul
          className="absolute mt-1 w-full rounded-lg z-20 overflow-hidden max-h-60 overflow-y-auto bg-black border border-gray-700 shadow-lg"
          role="listbox"
        >
          {options.map((opt) => {
            const isSelected = displayedValue === opt;
            return (
              <li key={opt} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className={`
                    w-full px-3 py-2 text-left text-sm transition-colors duration-100
                    ${isSelected ? "bg-gray-900 text-white" : "text-gray-200 hover:bg-gray-800"}
                  `}
                >
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {error && <p className="text-xs mt-1 text-red-600 font-medium select-none">{error}</p>}
    </div>
  );
};

export default DropDown;
