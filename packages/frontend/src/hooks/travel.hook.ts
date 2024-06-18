import { useNavigate } from "react-router-dom";
import { ITavel, ITravelDto } from "../service/service";
import axios from "axios";
import { PATH } from "../constants/path";
import { ROUTES } from "../constants/roures";

export interface IUpdateTravel {
  date?: string;
  duration?: number;
  food?: boolean;
  art?: boolean;
}

export const useTravel = () => {
  const navigate = useNavigate();

  const addTravel = async (travel: ITravelDto): Promise<void> => {
    try {
      const response = await axios.post<ITravelDto>(
        `${PATH.LOCALHOST}${PATH.TRAVEL}`,
        travel
      );
      console.log(response.data);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTravel = async (
    travelId: string,
    travel: IUpdateTravel
  ): Promise<void> => {
    try {
      const response = await axios.patch<ITravelDto>(
        `${PATH.LOCALHOST}${PATH.TRAVEL}/${travelId}`,
        travel
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const allTravels = async (): Promise<any[]> => {
    const userIdObject = localStorage.getItem("userId");
    try {
      if (userIdObject) {
        const userId = JSON.parse(userIdObject).userId;
        const response = await axios.get(
          `${PATH.LOCALHOST}${PATH.TRAVEL}/travel-list-by-user-id/${userId}`
        );
        console.log(response.data);
        return response.data;
      }
      alert("No information about user");
      return [];
    } catch (error) {
      alert(error);
      return [];
    }
  };

  const getTravelInformatiom = async (
    travelId: string
  ): Promise<{ travel: ITavel | null; image: string }> => {
    try {
      const response = await axios.get(
        `${PATH.LOCALHOST}${PATH.TRAVEL}/travel-data-by-id/${travelId}`
      );
      return response.data;
    } catch (error) {
      const travel = null;
      const image = "";
      return { travel, image };
    }
  };

  const likeTravel = async (travelId: string): Promise<any> => {
    try {
      const response = await axios.patch(
        `${PATH.LOCALHOST}${PATH.TRAVEL}/favorite/${travelId}`
      );
      return response.data;
    } catch (error) {
      console.log("Error when liked");
      return {};
    }
  };

  const getFavoriteTravels = async (): Promise<any[]> => {
    const userIdObject = localStorage.getItem("userId");
    try {
      if (userIdObject) {
        const userId = JSON.parse(userIdObject).userId;
        const response = await axios.get(
          `${PATH.LOCALHOST}${PATH.TRAVEL}/favorite/${userId}`
        );
        return response.data;
      }
      console.log("Error when get favorite travels but userId exsists");
      return [];
    } catch (error) {
      console.log("Error when get favorite travels");
      return [];
    }
  };

  return {
    addTravel,
    updateTravel,
    allTravels,
    getTravelInformatiom,
    likeTravel,
    getFavoriteTravels,
  };
};
