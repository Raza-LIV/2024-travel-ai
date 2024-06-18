import { useEffect, useState } from "react";
import { container, textareaContainer } from "./StyledField.styled";
import { Placeholder } from "../Placeholder/Placeholder";
import { useTravelModal } from "../../store/travelModal";
import { FormikErrors } from "formik";

interface IProps {
  setValues: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          text: string;
        }>
      >;
  handleChange: any;
  value: string;
}

export const StyledField = ({ setValues, handleChange, value }: IProps) => {
  const { isModalVisible } = useTravelModal();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const handleFocus = () => {
    setIsVisible(false);
  };
  const handleBlur = () => {
    if (value === "") {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    if (isModalVisible) {
      setValues("text", "");
      setIsVisible(true);
    }
  }, [isModalVisible]);
  return (
    <div className={container}>
      <textarea
        id="text"
        className={textareaContainer}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={handleChange}
      />
      <Placeholder isVisible={isVisible} />
    </div>
  );
};
