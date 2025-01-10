import fetcher from "./fetcher";
import { CheckinResponse } from "./useCheckin";
const URL = "v2/children";

export const checkIn = async (childId: string, pickupTime: string) => {
  const response = await fetcher<CheckinResponse>(
    `${URL}/${childId}/checkins`,
    {
      pickupTime: pickupTime,
    },
    {
      method: "POST",
    }
  );
  return response;
};
