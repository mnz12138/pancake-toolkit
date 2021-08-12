import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#69AB6B",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#000000",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#FAF9FA",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#F5F7FA",
  input: "#F5F7FA",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#000922",
  textDisabled: "rgba(88, 99, 110, 0.4)",
  textSubtle: "#58636E",
  textWhite: "#FFFFFF",
  textBlack: "#000000",
  disabled: "#E9EAEB",
  borderColor: 'rgb(231, 227, 235)',
  hover: '#FDD436',
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#FDD436",
  background: "#131317",
  backgroundDisabled: "#4B515C",
  backgroundAlt: "#272C35",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#1C1E22",//弹窗背景色 card里块背景色
  input: "#1C1E22",//输入框背景色
  inputSecondary: "#262130",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "rgba(255,255,255,0.3)",
  textSubtle: "#FFFFFF",
  textWhite: "#FFFFFF",
  textBlack: "#000000",
  disabled: "#524B63",
  borderColor: '#4A4C5E',
  hover: '#FDD436',
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
