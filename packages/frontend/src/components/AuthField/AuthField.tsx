import { TextField } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { IFieldContent } from "../../pages/TestReg/TestReg";

interface IProps {
  contentArr: IFieldContent[];
}

export const AuthField = ({ contentArr }: IProps) => {
  return (
    <>
      {contentArr.map((content, index) => (
        <TextField
          key={index}
          onChange={content.handleChange(content.param)}
          value={content.value}
          id="demo-helper-text-misaligned-no-helper"
          label={content.label}
          type="text"
          autoComplete="off"
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
            border: `1px solid ${COLORS.PRIMARY}`,
            height: "45px",
            outline: "none",
            boxShadow: "none",
            margin: "20px 0 0 0",
            "& fieldset": { border: "none" },
            "& input": {
              "-moz-appearance": "textfield",
            },
            "& input::-webkit-outer-spin-button": {
              "-webkit-appearance": "none",
              margin: 0,
            },
            "& input::-webkit-inner-spin-button": {
              "-webkit-appearance": "none",
              margin: 0,
            },
          }}
          InputProps={{ sx: { fontSize: "20px", color: COLORS.PRIMARY } }}
          InputLabelProps={{
            sx: {
              top: "-8px",
              backgroundColor: "#fff",
              fontSize: "20px",
              color: `${COLORS.PRIMARY_OPAQUE[60]} !important`,
            },
          }}
        />
      ))}
    </>
  );
};
