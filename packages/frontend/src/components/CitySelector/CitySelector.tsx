import { useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { css } from "@emotion/css";
import { useGetWidth } from "../../hooks/get-width.hook";
import { ICity } from "country-state-city";
import { IVisibility } from "../../types/generation.types";

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
  type: string;
  array: ICity[];
  visibility: IVisibility;
}

export const CitySelector = ({
  locationValue,
  handleChange,
  type,
  array,
  visibility,
}: ISelectorProps) => {
  const { windowSize } = useGetWidth();
  useEffect(() => {
    visibility.setCityVisibility(array.length > 0 ? true : false);
  }, [array]);

  return (
    <div
      className={css(`width: ${windowSize <= 1190 ? windowSize - 20 : 275}px`)}
    >
      <FormControl fullWidth>
        <InputLabel
          sx={{
            top: "-8px",
            color: `${
              COLORS.PRIMARY_OPAQUE[visibility.cityVisibility ? 60 : 30]
            } !important`,
            fontSize: "20px",
            backgroundColor: COLORS.SECONDARY,
            ".MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {},
          }}
        >
          {type}
        </InputLabel>
        <Select
          value={locationValue}
          onChange={handleChange}
          MenuProps={MenuProps}
          disabled={!visibility.cityVisibility}
          sx={{
            color: COLORS.PRIMARY,
            borderRadius: "10px",
            fontSize: "20px",
            border: `1px solid ${
              visibility.cityVisibility
                ? COLORS.PRIMARY
                : COLORS.PRIMARY_OPAQUE[30]
            }`,
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
          {array.map((item) => (
            <MenuItem key={item.name} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
