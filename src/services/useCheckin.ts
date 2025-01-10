import { MutationOptions, useMutation } from "@tanstack/react-query";
import { useGetChild } from "./useGetChild";
import { checkIn } from "./checkIn";
import { invalidateQueries } from "./invalidateQueries";
import { useChildStore } from "@/features/ChildrenList/childStore";
import { useToastStore } from "@/hooks/useToast";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

type CheckinRequest = {
  pickupTime: string;
};

export type CheckinResponse = {
  error: string;
  errorCode: number;
  statusCode: number;
  log: boolean;
};

export const useCheckin = (
  options?: MutationOptions<CheckinResponse, CheckinResponse, CheckinRequest>
) => {
  const child = useGetChild();
  const setToast = useToastStore((store) => store.setToast);
  return useMutation<CheckinResponse, CheckinResponse, CheckinRequest>({
    mutationFn: ({ pickupTime }) => checkIn(child?.childId || "", pickupTime),
    onSuccess: (response) => {
      if (response.error) {
        throw response;
      }
      invalidateQueries(["children"]);
      useChildStore.setState({ selectedChild: "" });
      setToast({
        message: `${child?.name.firstName} checked in`,
        type: "success",
      });
    },
    ...options,
  });
};
