import { useState } from "react";
import RPagination from "react-bootstrap/Pagination";

export function Pagination({ currentPage, totalPages, onChange }) {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (event) => {
    const page = event.target.value;
    setActivePage(page);
    onChange(page);
  };

  return (
    <RPagination>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <RPagination.Item
          key={page}
          active={page === activePage}
          onClick={handlePageChange}
          value={page}
        >
          {page}
        </RPagination.Item>
      ))}
    </RPagination>
  );
}
