import { DefaultTheme } from "styled-components";
import { dark as darkAlert } from "./items/Alert/theme";
import { dark as darkCard } from "./items/Card/theme";
import { dark as darkPancakeToggle } from "./items/PancakeToggle/theme";
import { dark as darkRadio } from "./items/Radio/theme";
import { dark as darkToggle } from "./items/Toggle/theme";
import { dark as darkNav } from "./items/Menu/theme";
import { dark as darkModal } from "./items/Modal/theme";
import { dark as darkTooltip } from "./items/Tooltip/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  alert: darkAlert,
  colors: darkColors,
  card: darkCard,
  toggle: darkToggle,
  nav: darkNav,
  modal: darkModal,
  pancakeToggle: darkPancakeToggle,
  radio: darkRadio,
  tooltip: darkTooltip,
};

export default darkTheme;
