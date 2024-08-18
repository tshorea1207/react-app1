import * as React from "react";
import Box from "@mui/material/Box";
import Slider, { sliderClasses } from "@mui/material/Slider";
import { alpha, colors, styled } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

const StyledSlider = styled(Slider)(({ theme }) => ({
  height: 3,
  "& .MuiSlider-valueLabel": {
    width: "3em",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "normal",
    top: -1,
    color: theme.palette.text.primary,
    "&::before": { display: "none" },
  },
  "& .MuiSlider-rail": {
    opacity: "1",
    backgroundColor: "#999999",
  },
  "& .MuiSlider-mark": {
    opacity: "1",
    width: "8px",
    height: "8px",
    borderRadius: "99%",
    backgroundColor: "#999999",
    transform: "translateX(-50%) translateY(-50%)",
  },
  "& .MuiSlider-markActive": {
    backgroundColor: "currentColor",
  },
}));

export default StyledSlider;
