export const themeStorageKey = "theme";

export const themeColors = {
  light: "#f7f8f8",
  dark: "#090a0b",
} as const;

export type Theme = keyof typeof themeColors;

export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(themeStorageKey);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function systemTheme(): Theme {
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
