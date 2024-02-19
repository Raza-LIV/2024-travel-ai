// import React from "react";
// import { useGetWidth } from "../../hooks/get-width.hook";
import { FavoritesIcon } from "../../assets/icons/FavoritesIcon";
import { SavedIcon } from "../../assets/icons/savedTravels";
import { MobileHomeItem } from "../../components/MobileHomeItem/MobileHomeItem";
import {
  homeContainer,
  navigationMenu,
  dashboard,
  userName,
  itemsHolder,
} from "./Home.styled";

export const Home = () => {
  // const { windowSize } = useGetWidth();
  // {windowSize}
  return (
    <div className={homeContainer}>
      <div className={dashboard}>Dashboard page</div>
      <div className={navigationMenu}>
        <div className={userName}>
          <p>Welcome</p>, Andrew Willians
        </div>
        <div className={itemsHolder}>
          <MobileHomeItem
            icon={<SavedIcon isPrimaryColor={false} />}
            description="This tab allows you to create and manage new travel itineraries. Here,
            you can input your preferences, such as the city and country you want to
            explore, the duration of your stay, and your interests. The system will
            generate a personalized travel route for you based on the provided
            inputs."
            label="Generation"
            isPrimary={true}
          />
          <MobileHomeItem
            icon={<SavedIcon isPrimaryColor={true} />}
            description="In this tab, you can view and access all your previously generated travel itineraries. You can revisit and make changes to any of the saved itineraries as per your requirements."
            label="Saved Travels"
            isPrimary={false}
          />
          <MobileHomeItem
            icon={<SavedIcon isPrimaryColor={true} />}
            description="This tab"
            label="Generation"
            isPrimary={false}
          />
          <MobileHomeItem
            icon={<FavoritesIcon isPrimaryColor={true} />}
            description="This tab"
            label="Generation"
            isPrimary={false}
          />
          <MobileHomeItem
            icon={<SavedIcon isPrimaryColor={true} />}
            description="This tab"
            label="Generation"
            isPrimary={false}
          />
        </div>
      </div>
    </div>
  );
};
