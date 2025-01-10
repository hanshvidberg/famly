import { MutationOptions, useMutation } from "@tanstack/react-query";
import { checkout } from "./checkout";
import { useGetChild } from "./useGetChild";
import { invalidateQueries } from "./invalidateQueries";
import { useToastStore } from "@/hooks/useToast";
import { useChildStore } from "@/features/ChildrenList/childStore";

export const useCheckout = (options?: MutationOptions) => {
  const child = useGetChild();

  const setToast = useToastStore((store) => store.setToast);
  return useMutation({
    mutationFn: () => checkout(child?.childId || ""),
    onSuccess: () => {
      invalidateQueries(["children"]);
      useChildStore.setState({ selectedChild: "" });
      setToast({
        message: `${child?.name.firstName} checked out`,
        type: "success",
      });
    },
    ...options,
  });
};
