import { Table } from "@tanstack/react-table";
import { useLetterPagination } from "../usePagination";
import { Child } from "@/types/child";
import { Button } from "flowbite-react";

export const Pagination = ({ table }: { table: Table<Child> }) => {
  const { letterRanges, currentLetterRange, goToLetterPage } =
    useLetterPagination(table);
  return (
    <div className="flex gap-2 py-6">
      {letterRanges.map(({ pageIndex, letters }) => (
        <Button
          color={
            table.getState().pagination.pageIndex === pageIndex
              ? undefined
              : "gray"
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
