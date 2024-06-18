import React, { useState } from "react";
import {
  check,
  checkField,
  checkLabel,
  checkLabelActive,
  container,
} from "./CustomCheckbox.styled";
import { Check } from "../../assets/icons/Check";
import { COLORS } from "../../constants/colors";
import { css } from "@emotion/css";

interface IProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheckbox = ({ label, checked, onChange }: IProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className={container}>
      <input
        id="remember-user"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        className={css(
          checkField,
          `background-color: ${checked ? COLORS.PRIMARY : COLORS.SECONDARY}`
        )}
      />
      <div className={check}>
        <Check color={COLORS.SECONDARY} size={"12"} />
      </div>
      <label
        htmlFor={"remember-user"}
        className={css(checkLabel, isActive && checkLabelActive)}
      >
        {label}
      </label>
    </div>
  );
};
