import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { css } from "@emotion/css";
import { useGetWidth } from "../../hooks/get-width.hook";

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
  const { windowSize } = useGetWidth();
  return (
    <div
      className={css(`width: ${windowSize <= 1190 ? windowSize - 20 : 275}px`)}
    >
      <FormControl fullWidth>
        <InputLabel
          sx={{
            top: "-8px",
            color: `${COLORS.PRIMARY_OPAQUE[60]} !important`,
            fontSize: "20px",
            backgroundColor: COLORS.SECONDARY,
            ".MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {},
          }}
        >
          Country
        </InputLabel>
        <Select
          value={locationValue}
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{
            color: COLORS.PRIMARY,
            borderRadius: "10px",
            fontSize: "20px",
            border: `1px solid ${COLORS.PRIMARY}`,
            height: "45px",
            outline: "none",
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
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
    </div>
  );
};
