import useSWR from "swr";
import { api } from "@/config/axios";

interface UseFetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: any;
}

export function useFetch<T = any>(url?: string, options: UseFetchOptions = {}) {
  const { method = "GET", data } = options;

  const fetcher = async (url: string) => {
    try {
      const response = await api.request({
        url,
        method,
        data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data: swrData, error, isLoading, mutate } = useSWR<T>(url, fetcher);

  const req = async (url: string, method: string, data?: any) => {
    try {
      const response = await api.request({
        url,
        method,
        data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    data: swrData,
    error,
    isLoading,
    mutate,
    req,
  };
}
