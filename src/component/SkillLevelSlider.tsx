import Box from "@mui/material/Box";
import StyledSlider from "./DiscreteSlider";

const marks = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }];

export interface Props {
  onChange: (value: number) => void;
}

const DiscreteSlider: React.FC<Props> = ({ onChange }) => {
  const handleChange = (event: Event, value: number | number[]) => {
    // valueがnumberの場合のみonChangeハンドラを呼び出す
    if (typeof value === "number") {
      onChange(value);
    }
  };

  return (
    <Box sx={{ marginTop: 0 }}>
      <StyledSlider
        sx={{ width: 200, marginTop: 0 }}
        aria-label="Restricted values"
        defaultValue={6}
        marks={marks}
        valueLabelDisplay="on"
        step={1}
        min={1}
        max={7}
        onChange={handleChange}
      />
    </Box>
  );
};

export default DiscreteSlider;
