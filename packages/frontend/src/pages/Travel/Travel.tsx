import { useGetWidth } from "../../hooks/get-width.hook";
import { TravelDesktop } from "../TravelDesktop/TravelDesktop";
import { ModalMobile } from "../../components/ModalMobile/ModalMobile";
import { useTravelModal } from "../../store/travelModal";
import { usePlanOfDay } from "../../hooks/plan-of-day.hook";
import { usePlanDay } from "../../store/dayPlan";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TravelMobile } from "../TravelMobile/TravelMobile";
import { useLoad } from "../../store/load";

export interface IDayPlan {
  dayNumber: string;
  description: string;
  changed?: boolean;
}

export const Travel = () => {
  const { id } = useParams();
  const { setDayPlan } = usePlanDay();
  const { getPlanList } = usePlanOfDay();
  const { windowSize } = useGetWidth();
  const { requestIndex } = useTravelModal();
  const { inProcess } = useLoad();
  useEffect(() => {
    const fetchPlan = async () => {
      if (id) {
        const planlist = await getPlanList(id);
        const planObject: IDayPlan[] = planlist.map((plan) => ({
          dayNumber: `Day ${plan.number}`,
          description: plan.text,
        }));
        setDayPlan(planObject);
      }
    };
    fetchPlan();
  }, [inProcess]);

  return (
    <div>
      <ModalMobile requestIndex={requestIndex} />
      {windowSize <= 1190 ? <TravelMobile /> : <TravelDesktop />}
    </div>
  );
};
