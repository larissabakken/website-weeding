import { useCallback } from "react";
import { toast } from "react-toastify";

interface UseToastOptions {
  type?: "default" | "success" | "error" | "warning";
  autoClose?: number;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
}

export const useToast = () => {
  return useCallback((message: string, options?: UseToastOptions) => {
    toast(message, {
      type: options?.type ?? "default",
      autoClose: options?.autoClose ?? 3000,
      position: options?.position ?? "top-right",
    });
  }, []);
};
