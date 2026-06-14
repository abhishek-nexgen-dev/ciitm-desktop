import React, { useState } from "react";
import DropDown from "../../../../Components/DropDown";

interface ManageCourseFilterProps {
  academicYears: string[];
  departments: string[];
  programLevels: string[];
  onFilterChange?: (filters: Filters) => void;
}

interface Filters {
  academicYear: string;
  department: string;
  programLevel: string;
  status: "all" | "active" | "draft";
}

const ManageCourseFilter: React.FC<ManageCourseFilterProps> = ({
  academicYears,
  departments,
  programLevels,
  onFilterChange,
}) => {
  const [filters, setFilters] = useState<Filters>({
    academicYear: academicYears[0] || "",
    department: "All Departments",
    programLevel: "All Levels",
    status: "all",
  });

  const updateFilters = (updatedFields: Partial<Filters>) => {
    setFilters((prev) => {
      const newFilters = { ...prev, ...updatedFields };
      if (onFilterChange) {
        onFilterChange(newFilters);
      }
      return newFilters;
    });
  };

  return (
    <div
      className="
        filter-bar 
        border border-zinc-800 
        bg-[#0d0d10] 
        p-4 rounded-lg
        flex flex-wrap items-center gap-4 text-white
        "
      style={{ minWidth: 0 }}
    >
      {/* Academic Year */}
      <div className="filter-item flex flex-col min-w-[140px] flex-grow sm:flex-grow-0">
        <DropDown
          label="Academic Year"
          options={academicYears}
          value={filters.academicYear}
          onSelect={(val) => updateFilters({ academicYear: val })}
          className="w-full"
        />
      </div>

      {/* Department */}
      <div className="filter-item flex flex-col min-w-[180px] flex-grow sm:flex-grow-0">
        <DropDown
          label="Department"
          options={["All Departments", ...departments]}
          value={filters.department}
          onSelect={(val) => updateFilters({ department: val })}
          className="w-full"
        />
      </div>

      {/* Program Level */}
      <div className="filter-item flex flex-col min-w-[140px] flex-grow sm:flex-grow-0">
        <DropDown
          label="Program Level"
          options={["All Levels", ...programLevels]}
          value={filters.programLevel}
          onSelect={(val) => updateFilters({ programLevel: val })}
          className="w-full"
        />
      </div>

      {/* Status Buttons */}
      <div className="filter-item flex items-center gap-2 ml-auto flex-wrap">
        {(["all", "active", "draft"] as Filters["status"][]).map((statusKey) => (
          <button
            key={statusKey}
            type="button"
            onClick={() => updateFilters({ status: statusKey })}
            className={`px-4 py-2 rounded  border border-gray-500 font-semibold text-md whitespace-nowrap ${
              filters.status === statusKey
                ? "bg-black  text-white "
                : " text-gray-300 hover:bg-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-pressed={filters.status === statusKey}
            aria-label={`Filter by status ${statusKey}`}
          >
            {statusKey.charAt(0).toUpperCase() + statusKey.slice(1)}
          </button>
        ))}

        {/* Filter Icon Button */}
        <button
          type="button"
          aria-label="Open filter settings"
          className="ml-2 p-2 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ManageCourseFilter;
