import { useState } from "react";
import RPagination from "react-bootstrap/Pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  const [activePage, setActivePage] = useState<number>(currentPage);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    onChange(page);
  };

  return (
    <RPagination>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <RPagination.Item
          key={page}
          active={page === activePage}
          onClick={() => handlePageChange(page)}
          value={page}
        >
          {page}
        </RPagination.Item>
      ))}
    </RPagination>
  );
}
