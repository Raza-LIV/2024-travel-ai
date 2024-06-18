import React, { useEffect, useState } from "react";
import { centralBlock, container } from "./TestReg.styled";
import { useFormik } from "formik";
import { AuthComponent } from "../../components/AuthComponent/AuthComponent";
import { AuthImage } from "../../components/AuthImage/AuthImage";
import { AuthField } from "../../components/AuthField/AuthField";

export interface ILoginValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  isChecked: boolean;
}
export interface IFieldContent {
  handleChange: (param: string) => (e: string | React.ChangeEvent<any>) => void;
  value: string | boolean;
  label: string;
  param: string;
}
export interface IContentProps {
  text: { header: string; altVariant: string; link: string };
  fields: JSX.Element;
  isLogIn: boolean;
}

export const TestReg = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const initialValues: ILoginValues = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    isChecked: false,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const arrLogIn: IFieldContent[] = [
    {
      handleChange: (param: string) => formik.handleChange(param),
      value: formik.values.email,
      label: "Email",
      param: "email",
    },
    {
      handleChange: (param: string) => formik.handleChange(param),
      value: formik.values.password,
      label: "Password",
      param: "password",
    },
  ];
  const arrCreateAccount: IFieldContent[] = [
    {
      handleChange: (param: string) => formik.handleChange(param),
      value: formik.values.name,
      label: "Name",
      param: "name",
    },
    {
      handleChange: (param: string) => formik.handleChange(param),
      value: formik.values.email,
      label: "Email",
      param: "email",
    },
    {
      handleChange: (param: string) => formik.handleChange(param),
      value: formik.values.password,
      label: "Password",
      param: "password",
    },
    {
      handleChange: (param: string) => formik.handleChange(param),
      value: formik.values.repeatPassword,
      label: "Repeat password",
      param: "repeatPassword",
    },
  ];
  const contentLogIn: IContentProps = {
    text: {
      header: "LOGIN",
      altVariant: "Don't have an account",
      link: "Create new account?",
    },
    fields: <AuthField contentArr={arrLogIn} />,
    isLogIn: true,
  };
  const contentCreateAccount: IContentProps = {
    text: {
      header: "CREATE AN ACCOUNT",
      altVariant: "Already have an account",
      link: "Login now?",
    },
    fields: <AuthField contentArr={arrCreateAccount} />,
    isLogIn: false,
  };
  useEffect(() => {
    formik.resetForm();
  }, [isVisible]);
  return (
    <div className={container}>
      <div className={centralBlock}>
        {/* Sign Up */}
        <AuthComponent
          isVisible={isVisible}
          values={formik.values}
          onSubmit={formik.handleSubmit}
          handleChangeIsChacked={formik.handleChange("isChecked")}
          content={contentLogIn}
        />
        <AuthImage isSignUp={isVisible} setIsSignUp={setIsVisible} />
        {/* Log In */}
        <AuthComponent
          isVisible={!isVisible}
          values={formik.values}
          onSubmit={formik.handleSubmit}
          handleChangeIsChacked={formik.handleChange("isChecked")}
          content={contentCreateAccount}
        />
      </div>
    </div>
  );
};
