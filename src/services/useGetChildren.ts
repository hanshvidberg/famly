import { useQuery } from "@tanstack/react-query";
import fetcher from "./fetcher";
import { ChildrenResponse } from "@/types/child";

const URL = "daycare/tablet/group/";
const body = {
  groupId: "86413ecf-01a1-44da-ba73-1aeda212a196",
  institutionId: "dc4bd858-9e9c-4df7-9386-0d91e42280eb",
};

export const useGetChildren = () => {
  return useQuery({
    queryKey: ["children"],
    queryFn: () => fetcher<ChildrenResponse>(URL, body),
  });
};
