const TOKEN = "1127a03c-ed76-41d5-9058-f9ca105c41cf";
const baseUrl = "https://app.famly.co/api/";

const fetcher = async <T>(url: string, body?: any) => {
  const params = new URLSearchParams();
  params.set("accessToken", TOKEN);

  if (body) {
    Object.entries(body)?.forEach(([key, value]) => {
      params.set(key, value as string);
    });
  }

  const res = await fetch(`${baseUrl}${url}?${params.toString()}`);
  return res.json() as Promise<T>;
};

export default fetcher;
