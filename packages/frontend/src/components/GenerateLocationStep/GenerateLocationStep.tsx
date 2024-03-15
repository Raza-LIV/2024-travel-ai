import React, { useEffect, useState } from "react";
import {
  container,
  submitContainer,
  inputConteiner,
} from "./GenerateLocationStep.styled";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { Button } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { useStepperNumber } from "../../store/stepNumber";

interface IProps {
  handleChange: any;
  values: IValues;
}

export const GenerateLocationStep = ({ handleChange, values }: IProps) => {
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const { incStepNumber } = useStepperNumber();
  const { country, state, city } = values;
  const handleClick = () => {
    if (country === "") {
      return false;
    }
    if (state === "") {
      return false;
    }
    if (city === "") {
      return false;
    }
    return true;
  };
  useEffect(() => {
    setButtonVisibility(handleClick());
  }, [country, state, city]);
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
          onClick={incStepNumber}
          style={{
            borderRadius: "10px",
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.SECONDARY,
            width: "275px",
            height: "45px",
            fontSize: "16px",
            opacity: buttonVisibility ? 1 : 0.6,
          }}
          fullWidth
          disabled={!buttonVisibility}
          type="button"
        >
          Next step
        </Button>
      </div>
    </div>
  );
};
