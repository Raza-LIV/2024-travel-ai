import { useNavigate } from "react-router-dom";
import { IUserDto } from "../service/service";
import axios from "axios";
import { PATH } from "../constants/path";
import { ROUTES } from "../constants/roures";

export const useSignIn = () => {
  const navigate = useNavigate();

  const signIn = async (user: IUserDto): Promise<IUserDto | null> => {
    try {
      const response = await axios.post<IUserDto>(
        `${PATH.LOCALHOST}${PATH.USER}/${PATH.EMAIL}`,
        user
      );
      console.log("response = ", response.data);
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

  return { signIn };
};
