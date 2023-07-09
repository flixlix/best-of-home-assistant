import produce from "immer";
import { CustomAlert, BestOfHAStore } from "./store.d";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { merge } from "lodash";

const initialState = {
  alert: { type: "info", message: "", open: false, duration: 3000 } as CustomAlert,
  theme: "light" as "light" | "dark",
};
export const useMyStore = create<BestOfHAStore>()(
  devtools(
    persist(
      (set: Function) => ({
        // State
        ...initialState,
        // Actions
        setAlert: (alert: CustomAlert) =>
          set(
            produce((state: BestOfHAStore) => {
              state.alert = alert;
              state.alert.open = alert.open ?? true;
              state.alert.duration = alert.duration ?? 3000;
            })
          ),
        setTheme: (theme: "light" | "dark") =>
          set(
            produce((state: BestOfHAStore) => {
              state.theme = theme;
            })
          ),
        // @ts-ignore
        purge: () =>
          set(
            produce((state: BestOfHAStore) => {
              const newState = structuredClone(initialState);
              merge(state, newState);
            })
          ),
      }),
      {
        name: "best-of-ha-store",
      }
    )
  )
);
