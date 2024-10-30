import { FC } from "react";

interface IProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  handleChangePage: (currentPage: number) => void;
}

export const Pagination: FC<IProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  handleChangePage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handleChangePage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handleChangePage(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
