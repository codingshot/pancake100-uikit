import { Colors } from "./types";

export const baseColors = {
  failure: "#F14646",
  primary: "#00CC9B",
  primaryBright: "#00EDB4",
  primaryDark: "#018D6C",
  secondary: "#00FFC2",
  success: "#00CC9B",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#000000",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#666171",
  tertiary: "#EFF4F5",
  text: "#00CC9B",
  textDisabled: "#BDC2C4",
  textSubtle: "#018D6C",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#00EDB4",
  background: "#222222",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#00CC9B",
  inputSecondary: "#66578D",
  primaryDark: "#018D6C",
  tertiary: "#2F2F2F",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#00CC9B",
  borderColor: "#00CC9B",
  card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #00CC9B 0%, #00EDB4 100%)",
  },
};