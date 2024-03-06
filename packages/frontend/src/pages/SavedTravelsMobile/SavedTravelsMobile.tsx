import { BackIcon } from "../../assets/icons/BackIcon";
import { TEXT } from "../../constants/text";
import { MobileTravelItem } from "../../components/MobileTravelItem/MobileTravelItem";
import {
  savedContainer,
  savedLayout,
  backIcon,
  travels,
} from "./SavedTravelsMobile.styled";
import paris from "../../assets/icons/Paris.png";
import london from "../../assets/icons/London.png";

export const SavedTravelsMobile = () => {
  return (
    <div className={savedContainer}>
      <div className={backIcon}>
        <BackIcon />
      </div>
      <div className={savedLayout}>{TEXT.SAVED}</div>
      <div className={travels}>
        <MobileTravelItem
          label="Paris"
          isFirst={true}
          isAdd={false}
          generatedTravelText="Start your day with a visit to the Louvre Museum, home to thousands of artworks including the famous Mona Lisa. Afterward, take a stroll along the Seine River and enjoy the views of iconic landmarks like the Notre-Dame Cathedral and the Eiffel Tower..."
          flagTravel={paris}
        />
        <MobileTravelItem
          label="London"
          isFirst={false}
          isAdd={false}
          generatedTravelText="Begin your day with a visit to the British Museum, where you can explore a vast collection of world art and artifacts, including the Rosetta Stone and the Elgin Marbles. After your museum visit, take a leisurely stroll along the River Thames..."
          flagTravel={london}
        />
        <MobileTravelItem
          label="Add new travel"
          isFirst={false}
          isAdd={true}
          generatedTravelText="Create new travel itineraries. Here, you can input your preferences, such as the city and country you want to explore, the duration of your stay, and your interests. The system will generate a personalized travel route for you based on the provided inputs."
        />
      </div>
    </div>
  );
};
