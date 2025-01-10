import { keepPreviousData, useQuery } from "@tanstack/react-query";
import fetcher from "./fetcher";
import { ChildrenResponse } from "@/types/child";

const URL = "daycare/tablet/group/";
const body = {
  groupId: "86413ecf-01a1-44da-ba73-1aeda212a196",
  institutionId: "dc4bd858-9e9c-4df7-9386-0d91e42280eb",
};

export const useGetChildren = () => {
  return useQuery({
    placeholderData: keepPreviousData,
    queryKey: ["children"],
    queryFn: () => getChildren(),
    initialData: { children: [] },
    staleTime: 0,
  });
};

export const getChildren = async () => {
  const response = await fetcher<ChildrenResponse>(URL, body);
  return response;
};
