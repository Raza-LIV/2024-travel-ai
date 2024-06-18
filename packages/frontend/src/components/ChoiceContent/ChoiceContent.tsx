import { useEffect, useState } from "react";
import { ChooseInterests } from "../ChooseInterests/ChooseInterests";
import { NoIcon } from "../../assets/icons/NoIcon";
import { ICON_SIZE } from "../../constants/iconSize";
import { TEXT } from "../../constants/text";
import { CorrectIcon } from "../../assets/icons/CorrectIcon";
import { FormikErrors } from "formik";
import { choiceContainer } from "./ChoiceContent.styled";
import { COLORS } from "../../constants/colors";
import { IModalValues } from "../ModalContent/ModalContent";
import { useTravelModal } from "../../store/travelModal";

interface IProps {
  savedValue: boolean | null;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IModalValues>>;
  character: string;
}

export const ChoiceContent = ({
  savedValue,
  setFieldValue,
  character,
}: IProps) => {
  const [chooseNo, setChooseNo] = useState<number>(0); // Get from DataBase
  const [chooseYes, setChooseYes] = useState<number>(0); // Get from DataBase
  const { isModalVisible } = useTravelModal();
  useEffect(() => {
    if (savedValue === true) {
      setChooseYes(2);
      setChooseNo(1);
    }
    if (savedValue === false) {
      setChooseYes(1);
      setChooseNo(2);
    }
    if (savedValue === null) {
      setChooseYes(0);
      setChooseNo(0);
    }
  }, [isModalVisible]);

  return (
    <div className={choiceContainer}>
      <ChooseInterests
        icon={<NoIcon size={ICON_SIZE[40]} color={COLORS.PRIMARY} />}
        answer={TEXT.DISABLE}
        text={TEXT.STEP_FOOD_CHOOSE_NO}
        setFieldValue={setFieldValue}
        valueField={false}
        character={character}
        state={chooseNo}
        setState={setChooseNo}
        setOppositeState={setChooseYes}
        isBig={false}
      />
      <ChooseInterests
        icon={<CorrectIcon size={ICON_SIZE[40]} />}
        answer={TEXT.ENABLE}
        text={TEXT.STEP_FOOD_CHOOSE_YES}
        setFieldValue={setFieldValue}
        valueField={true}
        character={character}
        state={chooseYes}
        setState={setChooseYes}
        setOppositeState={setChooseNo}
        isBig={false}
      />
    </div>
  );
};
