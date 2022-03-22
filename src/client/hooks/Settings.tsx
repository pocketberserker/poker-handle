import { useCallback, useState } from "react";
import { ColorMode } from "../constants/theme";

export type Settings = {
  theme: ColorMode;
};

const defaultSettings: Settings = {
  theme:
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
};

const load = (): Settings => {
  if (typeof localStorage === "undefined") {
    return defaultSettings;
  }
  const storedSettings = localStorage.getItem("settings");
  const settings = storedSettings != null ? JSON.parse(storedSettings) : {};
  return {
    ...defaultSettings,
    ...settings,
  };
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(load());

  const updateSettings = useCallback(
    (newSettings: Partial<Settings>) => {
      const updated = {
        ...settings,
        ...newSettings,
      };
      setSettings(updated);
      localStorage.setItem("settings", JSON.stringify(updated));
    },
    [settings]
  );

  return {
    settings,
    updateSettings,
  };
};
