const PaginationButton = ({ currentPage, totalPages, onPageChange }) => {
  const isDisabled = totalPages === 0;

  return (
    <div className="mt-3 flex items-center justify-between pl-2 pr-2 xl:pl-6 xl:pr-5">
      <p className="text-gray-700 font-medium text-sm">Page {isDisabled ? 0 : currentPage} of <span>{totalPages}</span></p>
        <div className="flex gap-2">

            <button type="button" onClick={() => onPageChange(currentPage - 1)}
            disabled={isDisabled || currentPage === 1}
            className="font-medium text-sm text-gray-700 px-3 py-1 border border-gray-300 rounded transition duration-150 
                        hover:bg-blue-dark hover:text-white 
                        disabled:opacity-50 disabled:pointer-events-none 
                        cursor-pointer disabled:cursor-default"
            >
            Previous
            </button>
        
            <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={isDisabled || currentPage === totalPages}
            className="font-medium text-sm text-gray-700 px-3 py-1 border border-gray-300 rounded transition duration-150 
                        hover:bg-blue-dark hover:text-white 
                        disabled:opacity-50 disabled:pointer-events-none 
                        cursor-pointer disabled:cursor-default"
            >
            Next
            </button>
        </div>
    </div>
  );
};

export default PaginationButton;