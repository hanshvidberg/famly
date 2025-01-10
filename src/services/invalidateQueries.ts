import { getQueryClient } from "@/app/get-query-client";

export const invalidateQueries = (queries: string[]) => {
  const queryClient = getQueryClient();
  queries.forEach((query) => {
    queryClient.invalidateQueries({ queryKey: [query] });
  });
};
