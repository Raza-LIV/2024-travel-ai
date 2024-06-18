import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PATH } from "../constants/path";
import { ROUTES } from "../constants/roures";

export const useUser = () => {
  const navigation = useNavigate();
  const deleteUser = async () => {
    const userIdObject = localStorage.getItem("userId");
    try {
      if (userIdObject) {
        const userId = JSON.parse(userIdObject).userId;
        const response = await axios.delete(
          `${PATH.LOCALHOST}${PATH.USER}/${userId}`
        );
        console.log(response.data);
        navigation(ROUTES.EMPTY);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { deleteUser };
};
