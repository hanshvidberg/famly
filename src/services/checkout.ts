import fetcher from "./fetcher";
const URL = "v2/children";

export const checkout = async (childId: string) => {
  const response = await fetcher(
    `${URL}/${childId}/checkout`,
    {},
    {
      method: "POST",
    }
  );
  return response;
};
