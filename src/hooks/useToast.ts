"use client";

import { create } from "zustand";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastStore {
  toasts: Toast[];
  setToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: number) => void;
}

let id = 1;

export const useToastStore = create<ToastStore>((set, get) => ({
  toasts: [],
  setToast: (toast) => {
    const toastId = id++;
    const toasts = [...get().toasts, { ...toast, id: toastId }];
    set({ toasts });

    setTimeout(() => {
      get().removeToast(toastId);
    }, 3000);
  },
  removeToast: (id: number) => {
    const toasts = get().toasts.filter((toast) => toast.id !== id);
    set({ toasts });
  },
}));
