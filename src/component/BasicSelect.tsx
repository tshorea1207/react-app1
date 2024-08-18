import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import Theme from "./Theme";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const MySelect = styled(Select)(({ theme }) => ({}));

  return (
    <Box sx={{ minWidth: 120, height: "2.5rem" }}>
      <FormControl fullWidth>
        <InputLabel color="primary" id="demo-simple-select-label"></InputLabel>
        <Select
          sx={{ minHeight: "1.0rem", height: "2.5rem" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          color="primary"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
