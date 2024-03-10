import React from "react";
import {
  container,
  submitContainer,
  inputConteiner,
} from "./GenerateLocationStep.styled";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { Button } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";

interface IProps {
  handleChange: any;
  values: IValues;
}

export const GenerateLocationStep = ({ handleChange, values }: IProps) => {
  return (
    <div className={container}>
      <div className={inputConteiner}>
        <CountrySelector
          locationValue={values.country}
          handleChange={handleChange("country")}
        />
        <CountrySelector
          locationValue={values.state}
          handleChange={handleChange("state")}
        />
        <CountrySelector
          locationValue={values.city}
          handleChange={handleChange("city")}
        />
      </div>
      <div className={submitContainer}>
        <Button
          variant="outlined"
          style={{
            borderRadius: "10px",
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.SECONDARY,
            width: "275px",
            height: "45px",
            fontSize: "16px",
          }}
          fullWidth
          type="button"
        >
          Next step
        </Button>
      </div>
    </div>
  );
};
