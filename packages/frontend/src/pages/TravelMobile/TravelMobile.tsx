import {
  backIcon,
  backgroundImage,
  loaderContainer,
} from "./TravelMobile.styled";
import { TravelInformation } from "../../components/TravelInformation/TravelInformation";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../constants/roures";
import { useLoad } from "../../store/load";
import { Loading } from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useTravel } from "../../hooks/travel.hook";
import { ICON_SIZE } from "../../constants/iconSize";
import { COLORS } from "../../constants/colors";
import { IconBack } from "../../assets/icons/IconBack";

export const TravelMobile = () => {
  const navigation = useNavigate();
  const { inProcess, setInProcess } = useLoad();

  const { id } = useParams();
  const [travelInfo, setTravelInfo] = useState<any>(null);
  const [placeImage, setPlaceImage] = useState<string>("");
  const { getTravelInformatiom } = useTravel();
  useEffect(() => {
    const fetchTravelInfo = async () => {
      setInProcess(true);
      if (id) {
        console.log(`id = ${id}`);
        console.log(await getTravelInformatiom(id));
        const { travel, image } = await getTravelInformatiom(id);
        setPlaceImage(image);
        setTravelInfo(travel);
      } else {
        alert("This id dose not exsists");
      }
    };
    fetchTravelInfo().then(() => {
      setInProcess(false);
    });
  }, [id]);
  return (
    <>
      {inProcess ? (
        <div className={loaderContainer}>
          <Loading />
        </div>
      ) : (
        <div>
          <div className={backIcon} onClick={() => navigation(ROUTES.HOME)}>
            <IconBack color={COLORS.SECONDARY} size={ICON_SIZE[40]} />
          </div>
          <div>
            <img className={backgroundImage} src={placeImage} alt="123" />
          </div>
          <TravelInformation travelInfo={travelInfo} />
        </div>
      )}
    </>
  );
};
