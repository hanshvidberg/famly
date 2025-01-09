import { useCallback, useMemo } from "react";
import { Table } from "@tanstack/react-table";
import { Child } from "@/types/child";

interface LetterRange {
  pageIndex: number;
  letters: string;
}

export const useLetterPagination = (table: Table<Child>) => {
  const letterRanges = useMemo(() => {
    const ranges: LetterRange[] = [];
    const allRows = table.getPrePaginationRowModel().rows;
    const pageSize = table.getState().pagination.pageSize;

    for (let i = 0; i < allRows.length; i += pageSize) {
      const pageRows = allRows.slice(i, i + pageSize);
      const firstLetter = pageRows[0]?.original.name.firstName[0].toUpperCase();
      const lastLetter =
        pageRows[pageRows.length - 1]?.original.name.firstName[0].toUpperCase();

      const letters =
        firstLetter === lastLetter
          ? firstLetter
          : `${firstLetter}-${lastLetter}`;

      ranges.push({
        pageIndex: Math.floor(i / pageSize),
        letters,
      });
    }
    return ranges;
  }, [
    table.getPrePaginationRowModel().rows,
    table.getState().pagination.pageSize,
  ]);

  const currentLetterRange = useMemo(() => {
    return letterRanges[table.getState().pagination.pageIndex]?.letters || "";
  }, [letterRanges, table.getState().pagination.pageIndex]);

  const goToLetterPage = useCallback(
    (letter: string) => {
      const targetPage = letterRanges.find((range) => {
        const [start, end] = range.letters.split("-");
        if (end) {
          return letter >= start && letter <= end;
        }
        return letter === start;
      });

      if (targetPage) {
        table.setPageIndex(targetPage.pageIndex);
      }
    },
    [letterRanges, table]
  );

  return {
    letterRanges,
    currentLetterRange,
    goToLetterPage,
  };
};
