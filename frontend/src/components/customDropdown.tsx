import React from "react";

interface CustomDropdownProps {
  label: string;
  value: string;
  options: string[];
  dropdownKey: string;
  openDropdown: string | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  onSelect: (val: string) => void;
  icon?: React.ReactNode;
}

export function CustomDropdown({
  label,
  value,
  options,
  dropdownKey,
  openDropdown,
  setOpenDropdown,
  onSelect,
  icon,
}: CustomDropdownProps) {
  const isOpen = openDropdown === dropdownKey;

  return (
    <div className="flex flex-col  rounded-md  ">
      <label className=" font-semibold text-gray-700">{label} <span className="text-red-600">*</span></label>

      {/* Dropdown button */}
      <div
        className="flex items-center justify-between mt-1 rounded cursor-pointer select-none"
        onClick={() => setOpenDropdown(isOpen ? null : dropdownKey)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold  truncate">
            {value || `--Select--`}
          </span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 text-gray-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute z-10 mt-16 w-152 border rounded bg-white shadow-lg max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-red-700 hover:text-white font-semibold"
              onClick={() => {
                onSelect(opt);
                setOpenDropdown(null);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
