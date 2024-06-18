import axios from "axios";
import { PATH } from "../constants/path";

export const usePlanOfDay = () => {
  const getPlanList = async (travelId: string): Promise<any[]> => {
    // console.log(`${PATH.LOCALHOST}${PATH.PLAN}/${travelId}`);
    try {
      const response = await axios.get(
        `${PATH.LOCALHOST}${PATH.PLAN}/${travelId}`
      );

      return response.data;
    } catch (error) {
      alert(error);
      return [];
    }
  };

  return { getPlanList };
};
