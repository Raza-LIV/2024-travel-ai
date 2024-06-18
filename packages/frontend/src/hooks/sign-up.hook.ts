import axios from "axios";
import { PATH } from "../constants/path";
import { IUserDto } from "../service/service";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/roures";

export const useSignUp = () => {
  const navigate = useNavigate();

  const signUp = async (user: IUserDto): Promise<IUserDto | null> => {
    try {
      const response = await axios.post<IUserDto>(
        `${PATH.LOCALHOST}${PATH.USER}`,
        user
      );
      console.log(response.data);
      localStorage.setItem(
        "userId",
        JSON.stringify({ userId: response.data.id })
      );
      navigate(ROUTES.HOME);
      return response.data;
    } catch (error) {
      alert(error);
      return null;
    }
  };
  return { signUp };
};
