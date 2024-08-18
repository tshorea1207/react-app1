import Box from "@mui/material/Box";
import StyledSlider from "./DiscreteSlider";

const marks = [
  { value: 1 },
  { value: 10 },
  { value: 25 },
  { value: 30 },
  { value: 50 },
  { value: 60 },
  { value: 75 },
  { value: 100 },
];

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 200, marginTop: 0 }}>
      <StyledSlider
        aria-label="Restricted values"
        defaultValue={60}
        marks={marks}
        valueLabelDisplay="on"
        step={null}
      />
    </Box>
  );
}
