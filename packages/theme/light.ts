import { DefaultTheme } from "styled-components";
import { light as lightAlert } from "./items/Alert/theme";
import { light as lightCard } from "./items/Card/theme";
import { light as lightPancakeToggle } from "./items/PancakeToggle/theme";
import { light as lightRadio } from "./items/Radio/theme";
import { light as lightToggle } from "./items/Toggle/theme";
import { light as lightTooltip } from "./items/Tooltip/theme";
import { light as lightNav } from "./items/Menu/theme";
import { light as lightModal } from "./items/Modal/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  alert: lightAlert,
  colors: lightColors,
  card: lightCard,
  toggle: lightToggle,
  nav: lightNav,
  modal: lightModal,
  pancakeToggle: lightPancakeToggle,
  radio: lightRadio,
  tooltip: lightTooltip,
};

export default lightTheme;
