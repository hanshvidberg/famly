import { Table } from "@tanstack/react-table";
import { useLetterPagination } from "../usePagination";
import { Child } from "@/types/child";
import { Button } from "flowbite-react";

export const Pagination = ({ table }: { table: Table<Child> }) => {
  const { letterRanges } = useLetterPagination(table);
  return (
    <div className="flex gap-2 py-6">
      {letterRanges.map(({ pageIndex, letters }) => (
        <Button
          className={
            table.getState().pagination.pageIndex === pageIndex
              ? "bg-secondary active:bg-secondary focus:bg-secondary hover:bg-secondary enabled:hover:bg-secondary"
              : "bg-gray-300 text-gray-900 enabled:hover:bg-secondary hover:text-white"
          }
          key={pageIndex}
          onClick={() => table.setPageIndex(pageIndex)}
        >
          {letters}
        </Button>
      ))}
    </div>
  );
};
