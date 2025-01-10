/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { Table } from "@tanstack/react-table";
import { Child } from "@/types/child";

interface LetterRange {
  pageIndex: number;
  letters: string;
}

export const useLetterPagination = (table: Table<Child>) => {
  const letterRanges = useMemo(() => {
    const allRows = table.getPrePaginationRowModel().rows;
    const pageSize = table.getState().pagination.pageSize;
    const totalPages = Math.ceil(allRows.length / pageSize);

    return Array.from({ length: totalPages }).reduce<LetterRange[]>(
      (ranges, _, index) => {
        const pageRows = allRows.slice(
          index * pageSize,
          (index + 1) * pageSize
        );
        if (pageRows.length === 0) return ranges;

        const firstLetter =
          pageRows[0].original.name.firstName[0].toUpperCase();
        const lastLetter =
          pageRows[
            pageRows.length - 1
          ].original.name.firstName[0].toUpperCase();
        const letters =
          firstLetter === lastLetter
            ? firstLetter
            : `${firstLetter}-${lastLetter}`;

        return [...ranges, { pageIndex: index, letters }];
      },
      []
    );
  }, [
    table.getPrePaginationRowModel().rows,
    table.getState().pagination.pageSize,
  ]);

  return {
    letterRanges,
  };
};
