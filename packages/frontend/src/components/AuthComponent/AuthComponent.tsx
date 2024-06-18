import React, { ChangeEvent, useEffect, useState } from "react";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { css } from "@emotion/css";
import {
  btnDisable,
  btnEnable,
  caption,
  functionalContent,
  linkPart,
  linkText,
  questionText,
  saveButton,
} from "./AuthComponent.styled";
import { IContentProps, ILoginValues } from "../../pages/TestReg/TestReg";
import { IUserDto } from "../../service/service";
import { useSignUp } from "../../hooks/sign-up.hook";
import { useSignIn } from "../../hooks/sign-in.hook";

interface IProps {
  handleChangeIsChacked: (e: string | ChangeEvent<any>) => void;
  values: ILoginValues;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  isVisible: boolean;
  content: IContentProps;
}

export const AuthComponent = ({
  handleChangeIsChacked,
  values,
  onSubmit,
  isVisible,
  content,
}: IProps) => {
  // Backend
  const createUserDto: IUserDto = {
    name: values.name,
    email: values.email,
    password: values.password,
  };

  const { signUp } = useSignUp();
  const { signIn } = useSignIn();
  // Backend
  const [enable, setEnable] = useState<boolean>(false);
  useEffect(() => {
    content.isLogIn
      ? setEnable(values.email && values.password ? true : false)
      : setEnable(
          values.email && values.password && values.repeatPassword
            ? true
            : false
        );
  }, [values.email, values.password, values.repeatPassword]);
  return (
    <div
      className={css(
        functionalContent,
        `${content.isLogIn ? "right" : "left"}: 0;
        opacity: ${isVisible ? 1 : 0};
        `
      )}
    >
      <div className={caption}>{content.text.header}</div>
      {content.fields}
      {content.isLogIn && (
        <div className={questionText}>
          <CustomCheckbox
            label={"Remember me"}
            checked={values.isChecked}
            onChange={handleChangeIsChacked}
          />
          <div className={css(linkText, `cursor: pointer`)}>
            Forgon password?
          </div>
        </div>
      )}
      <div
        onClick={() => {
          onSubmit();
          content.isLogIn ? signIn(createUserDto) : signUp(createUserDto);
        }}
        className={css(saveButton, enable ? btnEnable : btnDisable)}
      >
        Apply and save
      </div>
      <div className={css(linkText, `padding: 10px 0 0 0`)}>
        {content.text.altVariant}
        <div className={linkPart}>{content.text.link}</div>
      </div>
    </div>
  );
};
