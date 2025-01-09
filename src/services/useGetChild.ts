import { getQueryClient } from "@/app/get-query-client";
import { useChildStore } from "@/features/ChildrenList/childStore";
import { Child, ChildrenResponse } from "@/types/child";

export const useGetChild = () => {
  const selectedChild = useChildStore((store) => store.selectedChild);
  const queryClient = getQueryClient();
  const data = queryClient.getQueryData<ChildrenResponse>(["children"]);
  const child = data?.children.find(
    (child: Child) => child.childId === selectedChild
  );
  if (!child) {
    return null;
  }
  return child;
};
