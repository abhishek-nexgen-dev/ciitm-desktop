import React from "react";

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  totalEntries: number;
  entriesPerPage: number;
  onPageChange: (page: number) => void;
}

const CoursePagination: React.FC<CoursePaginationProps> = ({
  currentPage,
  totalPages,
  totalEntries,
  entriesPerPage,
  onPageChange,
}) => {
  const startEntry = entriesPerPage * (currentPage - 1) + 1;
  const endEntry = Math.min(entriesPerPage * currentPage, totalEntries);

  return (
    <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
      <div>
        Showing {startEntry}-{endEntry} of {totalEntries} entries
      </div>
      <nav className="flex items-center space-x-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1 ? "bg-gray-700 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-500"
          }`}
          aria-label="Previous page"
        >
          &lt;
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-blue-600 text-white" : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ))}

        <span className="px-2">...</span>

        <button
          onClick={() => onPageChange(totalPages)}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages ? "bg-blue-600 text-white" : "bg-gray-600 hover:bg-gray-500"
          }`}
          aria-current={currentPage === totalPages ? "page" : undefined}
        >
          {totalPages}
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-500"
          }`}
          aria-label="Next page"
        >
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default CoursePagination;
