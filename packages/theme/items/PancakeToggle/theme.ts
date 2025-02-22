import { darkColors, lightColors } from "../../colors";
import { PancakeToggleTheme } from "./types";

export const light: PancakeToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: PancakeToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
