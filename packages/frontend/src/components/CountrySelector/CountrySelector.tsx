import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { COLORS } from "../../constants/colors";
import { Box } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

interface ISelectorProps {
  locationValue: string;
  handleChange: any;
}

export const CountrySelector = ({
  locationValue,
  handleChange,
}: ISelectorProps) => {
  return (
    <div>
      <Box>
        <FormControl fullWidth>
          <InputLabel
            sx={{
              top: "-5px",
              color: `${COLORS.PRIMARY} !important`,
              backgroundColor: COLORS.SECONDARY,
              ".MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                color: COLORS.PRIMARY,
              },
            }}
          >
            Country
          </InputLabel>
          <Select
            value={locationValue}
            onChange={handleChange}
            MenuProps={MenuProps}
            sx={{
              borderRadius: "10px",
              border: `1px solid ${COLORS.PRIMARY}`,
              width: "275px",
              height: "45px",
              outline: "none",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
            <MenuItem value={7}>Seven</MenuItem>
            <MenuItem value={8}>Eight</MenuItem>
            <MenuItem value={9}>Nine</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={11}>Eleven</MenuItem>
            <MenuItem value={12}>Tvelve</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
