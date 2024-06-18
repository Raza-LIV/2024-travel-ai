import React, { ReactNode, useEffect, useState } from "react";
import { useModalContent } from "../../store/modalContent";
import { css } from "@emotion/css";
import {
  btnDisable,
  btnEnable,
  cancelButton,
  contentContainer,
  formContainer,
  label,
  modalBoby,
  modalButtomBar,
  modalTopBar,
  saveButton,
  settingsDescription,
} from "./ModalContent.styled";
import { useTravelModal } from "../../store/travelModal";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { COLORS } from "../../constants/colors";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { LetterTIcon } from "../../assets/icons/LetterTIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { SettingsContent } from "../SettingsContent/SettingsContent";
import { ChooseDateIcon } from "../../assets/icons/ChooseDateIcon";
import { DateContent } from "../DateContent/DateContent";
import { ClockIcon } from "../ClockIcon";
import { DurationContent } from "../DurationContent/DurationContent";
import { MealIcon } from "../../assets/icons/MealIcom";
import { ChoiceContent } from "../ChoiceContent/ChoiceContent";
import { HistoryIcon } from "../../assets/icons/HistoryIcon";
import { StyledField } from "../StyledField/StyledField";
import { useSavedValues } from "../../store/savedInitialValues";
import { usePlanDay } from "../../store/dayPlan";
import { IUpdateTravel, useTravel } from "../../hooks/travel.hook";
import { useParams } from "react-router-dom";
import { useLoad } from "../../store/load";

interface IProps {
  refContainer: React.RefObject<HTMLDivElement>;
  requestIndex: number;
}

interface ICurrentModal {
  icon: ReactNode;
  title: string;
  content: ReactNode;
  description?: string;
}

export interface IModalValues {
  text: string;
  date: string;
  duration: number | null;
  food: boolean | null;
  art: boolean | null;
}

interface IContentState {
  [key: number]: boolean;
}

interface IContent {
  [key: number]: {
    bodyContent: ICurrentModal;
    requirement: () => boolean;
    action: () => void;
    visibility: boolean;
    setVisibility: React.Dispatch<React.SetStateAction<IContentState>>;
  };
}

export const ModalContent = ({ refContainer, requestIndex }: IProps) => {
  const { dayPlan } = usePlanDay();
  const {
    contentNumber,
    setContentNumber,
    isDateChanged,
    isDurationChanged,
    isFoodChanged,
    isArtChanged,
    setIsDateChanged,
    setIsDurationChanged,
    setIsFoodChanged,
    setIsArtChanged,
  } = useModalContent();
  // Change on date from DataBase
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  //
  const initialValues: IModalValues = {
    text: "",
    date: dayjs(formattedDate).format("YYYY-MM-DD"),
    duration: null,
    food: null,
    art: null,
  };
  // const [prevValues, setPrevValues] = useState<IModalValues>(initialValues);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const [appearance, setAppearance] = useState<IContentState>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const { savedArt, savedFood, setSavedArt, setSavedFood, setSavedDuration } =
    useSavedValues();
  const modalFill: IContent = {
    0: {
      bodyContent: {
        icon: <LetterTIcon color={COLORS.PRIMARY} size={"80"} />,
        title: "Rephrase options",
        content: (
          <StyledField
            setValues={formik.setFieldValue}
            handleChange={formik.handleChange}
            value={formik.values.text}
          />
        ),
      },
      requirement: () => {
        if (formik.values.text !== "") return true;
        return false;
      },
      action: () => {
        dayPlan[requestIndex].changed = true;
        submitFunction(false, false);
      },
      visibility: appearance[0],
      setVisibility: setAppearance,
    },
    1: {
      bodyContent: {
        icon: <SettingsIcon color={COLORS.PRIMARY} size={"80"} />,
        title: "Generation settings",
        content: <SettingsContent />,
        description:
          "This changes will affect next generations. For example: “If you change duration travel period, next generation will contain new amount of days and plans for that day”. Settings provided here could be also edited later on.",
      },
      requirement: () => {
        if (isDateChanged || isDurationChanged || isFoodChanged || isArtChanged)
          return true;
        return false;
      },
      action: () => {
        submitFunction(false, true);
      },
      visibility: appearance[1],
      setVisibility: setAppearance,
    },
    2: {
      bodyContent: {
        icon: <ChooseDateIcon color={COLORS.PRIMARY} size={"80"} />,
        title: "Change date",
        content: <DateContent setFieldValue={formik.setFieldValue} />,
        description:
          "Provide new travel date here. This option could be changed later on",
      },
      requirement: () => {
        if (dayjs(formik.values.date).isBefore(dayjs(formattedDate))) {
          return false;
        } else if (dayjs(formik.values.date).isAfter(dayjs(formattedDate))) {
          return true;
        }
        return false;
      },
      action: () => {
        setIsDateChanged(true);
        submitFunction(true, false);
      },
      visibility: appearance[2],
      setVisibility: setAppearance,
    },
    3: {
      bodyContent: {
        icon: <ClockIcon color={COLORS.PRIMARY} size={"80"} />,
        title: "Change duration",
        content: (
          <DurationContent
            handleChange={formik.handleChange}
            values={formik.values}
            setValues={formik.setFieldValue}
          />
        ),
        description:
          "Provide new travel duration here. This option could be changed later on",
      },
      requirement: () => {
        if (formik.values.duration === null) {
          return false;
        }
        if (formik.values.duration < 1) {
          return false;
        }
        if (Number.isInteger(formik.values.duration) !== true) {
          return false;
        }
        return true;
      },
      action: () => {
        setIsDurationChanged(true);
        submitFunction(true, false);
      },
      visibility: appearance[3],
      setVisibility: setAppearance,
    },
    4: {
      bodyContent: {
        icon: <MealIcon color={COLORS.PRIMARY} size={"80"} />,
        title: "Change food and restaurants choice",
        content: (
          <ChoiceContent
            savedValue={savedFood}
            setFieldValue={formik.setFieldValue}
            character={"food"}
          />
        ),
        description:
          "Switch between disabled/enabled foods and restaurants options here. This option could be changed later on",
      },
      requirement: () => {
        if (formik.values.food !== null) return true;
        return false;
      },
      action: () => {
        setIsFoodChanged(true);
        submitFunction(true, false);
      },
      visibility: appearance[4],
      setVisibility: setAppearance,
    },
    5: {
      bodyContent: {
        icon: <HistoryIcon color={COLORS.PRIMARY} size={"80"} />,
        title: "Change History and Art choice",
        content: (
          <ChoiceContent
            savedValue={savedArt}
            setFieldValue={formik.setFieldValue}
            character={"art"}
          />
        ),
        description:
          "Switch between disabled/enabled history and art options here. This option could be changed later on",
      },
      requirement: () => {
        if (formik.values.art !== null) return true;
        return false;
      },
      action: () => {
        setIsArtChanged(true);
        submitFunction(true, false);
      },
      visibility: appearance[5],
      setVisibility: setAppearance,
    },
  };
  const { isModalVisible, setIsModalVisible } = useTravelModal();
  const { updateTravel } = useTravel();
  const { id } = useParams<string>();
  const { setInProcess } = useLoad();
  const submitFunction = async (isTable: boolean, total: boolean) => {
    if (total && id) {
      formik.handleSubmit();
      const travel: IUpdateTravel = {};
      if (formik.values.date) {
        travel.date = formik.values.date;
      }
      if (formik.values.duration) {
        travel.duration = formik.values.duration;
      }
      if (formik.values.food) {
        travel.food = formik.values.food;
      }
      if (formik.values.art) {
        travel.art = formik.values.art;
      }
      console.log(travel);
      setInProcess(true);
      setIsModalVisible(false);
      await updateTravel(id, travel);
      setInProcess(false);
      // console.log(formik.values);
    }
    setSavedFood(formik.values.food);
    setSavedArt(formik.values.art);
    setSavedDuration(formik.values.duration);
    isTable ? setContentNumber(1) : setIsModalVisible(false);
  };
  const applyClick = () => {
    if (modalFill[contentNumber].requirement())
      modalFill[contentNumber].action();
  };

  const [enable, setEnable] = useState<boolean>(false);
  useEffect(() => {
    setEnable(false);
    if (modalFill[contentNumber].requirement()) {
      setEnable(true);
    }
  }, [formik.values, contentNumber]);

  useEffect(() => {
    const newAppearance = Object.fromEntries(
      Object.keys(appearance).map((key) => [key, false])
    );
    newAppearance[contentNumber] = true;
    setAppearance(newAppearance);
  }, [contentNumber]);
  return (
    <div
      className={css(
        contentContainer,
        `opacity: ${modalFill[contentNumber].visibility ? 1 : 0};
        transition-duration: ${modalFill[contentNumber].visibility ? 300 : 0}ms;
        transition-delay: ${modalFill[contentNumber].visibility ? 300 : 0}ms;`
      )}
      ref={refContainer}
    >
      <div className={modalTopBar} onClick={() => setIsModalVisible(false)}>
        <CloseIcon color={COLORS.PRIMARY_OPAQUE[30]} size={"40"} />
      </div>
      <div className={css(modalBoby, `opacity: ${isModalVisible ? 1 : 0}`)}>
        {modalFill[contentNumber].bodyContent.icon}
        <div className={label}>
          {modalFill[contentNumber].bodyContent.title}
        </div>
        <form className={formContainer} onSubmit={formik.handleSubmit}>
          {modalFill[contentNumber].bodyContent.content}
          {modalFill[contentNumber].bodyContent.description && (
            <div className={settingsDescription}>
              {modalFill[contentNumber].bodyContent.description}
            </div>
          )}
          <div className={modalButtomBar}>
            <div
              className={cancelButton}
              onClick={() =>
                contentNumber > 1
                  ? setContentNumber(1)
                  : setIsModalVisible(false)
              }
            >
              {contentNumber > 1 ? "Back" : "Cancel"}
            </div>
            <div
              className={css(saveButton, enable ? btnEnable : btnDisable)}
              onClick={applyClick}
            >
              Apply and save
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
