const TOKEN = process.env.NEXT_PUBLIC_TOKEN || "";
const baseUrl = "https://app.famly.co/api/";

const fetcher = async <T>(url: string, body?: any, options?: RequestInit) => {
  const params = new URLSearchParams();
  params.set("accessToken", TOKEN);

  if (body) {
    Object.entries(body)?.forEach(([key, value]) => {
      params.set(key, value as string);
    });
  }

  const res = await fetch(`${baseUrl}${url}?${params.toString()}`, options);
  return res.json() as Promise<T>;
};

export default fetcher;
