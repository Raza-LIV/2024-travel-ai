import { useEffect, useState } from "react";
import { DateIcon } from "../../assets/icons/DateIcon";
import { FoodIcon } from "../../assets/icons/FoodIcon";
import { PeriodIcon } from "../../assets/icons/PeriodIcon";
import { PlaceIcon } from "../../assets/icons/PlaceIcon";
import { useGetWidth } from "../../hooks/get-width.hook";
import { useStepperNumber } from "../../store/stepNumber";
import { GenerationAddIcon } from "../GeneratonAddIcon/GenerationAddIcon";
import {
  container,
  descriptionContainerDesktop,
  descriptionContainerMobile,
  headerContainer,
  submitContainer,
  contentContainer,
} from "./GenerationStep.styled";
import { css } from "@emotion/css";
import { GenerationButton } from "../GenerationButton/GenerationButton";
import dayjs from "dayjs";
import { TEXT } from "../../constants/text";
import { LocationStep } from "../LocationStep/LocationStep";
import { DateStep } from "../DateStep/DateStep";
import { FormikErrors } from "formik";
import { DurationStep } from "../DurationStep/DurationStep";
import { FoodStep } from "../FoodStep/FoodStep";
import { ArtStep } from "../ArtStep/ArtStep";
import {
  IDependencies,
  IHandleClick,
  IValues,
} from "../../types/generation.types";

interface IProps {
  index: number;
  pasteText: (index: number) => string | undefined;
  values: IValues;
  handleChange: any;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
}

export const GenerationStep = ({
  index,
  pasteText,
  values,
  handleChange,
  setFieldValue,
}: IProps) => {
  const { stepNumber } = useStepperNumber();
  const { windowSize } = useGetWidth();
  const [appearIcon, setAppearIcon] = useState<boolean>(false);
  const [appearComponent, setAppearComponent] = useState<boolean>(false);
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const icons: JSX.Element[] = [
    <PlaceIcon />,
    <DateIcon />,
    <PeriodIcon />,
    <FoodIcon />,
  ];
  const headers: string[] = [
    TEXT.GENERATION_PAGE_CREATE,
    TEXT.GENERATION_STEP_DAYS,
    TEXT.GENERATION_STEP_DURATION,
    TEXT.GENERATION_STEP_FOOD,
    TEXT.GENERATION_STEP_ART,
  ];
  const descriptions: string[] = [
    TEXT.GENERATION_PAGE_CREATE_DESCRIPTION,
    TEXT.GENERATION_STEP_DAYS_DESCRIPTION,
    TEXT.GENERATION_STEP_DURATION_DESCRIPTION,
    TEXT.GENERATION_STEP_FOOD_DESCRIPTION,
    TEXT.GENERATION_STEP_ART_DESCRIPTION,
  ];
  const content: JSX.Element[] = [
    <LocationStep
      appearComponent={appearComponent}
      values={values}
      handleChange={handleChange}
      setFieldValue={setFieldValue}
    />,
    <DateStep
      appearComponent={appearComponent}
      setFieldValue={setFieldValue}
    />,
    <DurationStep
      appearComponent={appearComponent}
      handleChange={handleChange}
      values={values}
    />,
    <FoodStep
      appearComponent={appearComponent}
      setFieldValue={setFieldValue}
    />,
    <ArtStep appearComponent={appearComponent} setFieldValue={setFieldValue} />,
  ];
  const dependencies: IDependencies = {
    0: [values.country, values.state, values.city],
    1: [values.date],
    2: [values.duration],
    3: [values.food],
    4: [values.art],
  };
  const handleLocationClick = () => {
    if (values.country === "") {
      return false;
    }
    return true;
  };
  const handleDateClick = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    if (dayjs(values.date).isBefore(dayjs(formattedDate))) {
      return false;
    } else if (dayjs(values.date).isAfter(dayjs(formattedDate))) {
      return true;
    }
    return false;
  };
  const handleDurationClick = () => {
    if (values.duration === undefined) {
      return false;
    }
    if (values.duration < 1) {
      return false;
    }
    if (Number.isInteger(values.duration) !== true) {
      return false;
    }
    return true;
  };
  const handleFoodClick = () => {
    if (values.food === null) {
      return false;
    }
    return true;
  };
  const handleArtClick = () => {
    if (values.art === null) {
      return false;
    }
    return true;
  };
  const handleClick: IHandleClick = {
    0: () => handleLocationClick(),
    1: () => handleDateClick(),
    2: () => handleDurationClick(),
    3: () => handleFoodClick(),
    4: () => handleArtClick(),
  };

  useEffect(() => {
    setButtonVisibility(handleClick[index]);
  }, dependencies[index as keyof IDependencies]);
  useEffect(() => {
    if (windowSize <= 1190) {
      setAppearIcon(false);
    }
    setAppearIcon(true);
  }, [windowSize]);
  useEffect(() => {
    setAppearComponent(false);
    if (stepNumber === index) {
      setAppearComponent(true);
      setAppearIcon(false);
    }
    if (stepNumber === index + 1) {
      setAppearIcon(true);
    }
  }, [stepNumber]);
  return (
    <div>
      {stepNumber > index && windowSize > 1190 ? (
        <GenerationAddIcon
          appearIcon={appearIcon}
          icon={icons[index]}
          text={pasteText(index)}
        />
      ) : (
        <div
          className={css(
            container,
            `opacity: ${stepNumber === index ? 1 : 0};
            display: ${stepNumber === index ? "flex" : "none"}
            `
          )}
        >
          <div
            className={css(
              headerContainer,
              `opacity: ${appearComponent ? 1 : 0};
              transition-delay: ${
                windowSize > 1190 ? (index === 0 ? 300 : 800) : 300
              }ms;
              ${windowSize <= 1190 && "padding: 0 20px"}`
            )}
          >
            {headers[index]}
          </div>
          {windowSize > 1190 && (
            <div
              className={css(
                descriptionContainerDesktop,
                `opacity: ${appearComponent ? 1 : 0};
                transition-delay: ${index === 0 ? 800 : 1300}ms;`
              )}
            >
              {descriptions[index]}
            </div>
          )}
          <div className={contentContainer}>{content[index]}</div>
          {windowSize <= 1190 && (
            <div
              className={css(
                descriptionContainerMobile,
                `opacity: ${appearComponent ? 1 : 0};
                ${windowSize <= 1190 && "padding: 0 20px"}`
              )}
            >
              {descriptions[index]}
            </div>
          )}
          <div
            className={css(
              submitContainer,
              `opacity: ${appearComponent ? 1 : 0};
              transition-delay: ${
                windowSize > 1190 ? (index === 0 ? 1800 : 2300) : 1800
              }ms;
              `
            )}
          >
            <GenerationButton
              buttonVisibility={buttonVisibility}
              index={index}
            />
          </div>
        </div>
      )}
    </div>
  );
};
