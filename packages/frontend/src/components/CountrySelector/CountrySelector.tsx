import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { css } from "@emotion/css";
import { useGetWidth } from "../../hooks/get-width.hook";
import { ICountry } from "country-state-city";

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
  array: ICountry[];
}

export const CountrySelector = ({
  locationValue,
  handleChange,
  type,
  array,
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
          {type}
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
          {array.map((item) => (
            <MenuItem key={item.name} value={item.isoCode}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
