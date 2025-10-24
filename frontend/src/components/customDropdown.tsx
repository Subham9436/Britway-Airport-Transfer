interface CustomDropdownProps {
  label: string;
  value: string | number;
  options: (string | number)[];
  dropdownKey: string;
  openDropdown: string | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  onSelect: (val: string | number) => void;
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
    <div className="flex flex-col border border-gray-300 rounded-md p-3 relative">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div
        className="flex items-center justify-between mt-1 border rounded px-3 py-2 bg-gray-50 cursor-pointer"
        onClick={() => setOpenDropdown(isOpen ? null : dropdownKey)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium text-gray-800">
            {value || `Select ${label.toLowerCase()}`}
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full border rounded bg-white shadow-lg max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt}
              className="px-4 py-2 cursor-pointer hover:bg-red-700 hover:text-white"
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