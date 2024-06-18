import { useEffect, useState } from "react";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { css } from "@emotion/css";
import { useGetWidth } from "../../hooks/get-width.hook";
import {
  inputContainerDesktop,
  inputContainerMobile,
} from "./LocationStep.styled";
import { City, Country, ICity, IState, State } from "country-state-city";
import { StateSelector } from "../StateSelector/StateSelector";
import { CitySelector } from "../CitySelector/CitySelector";
import { FormikErrors } from "formik";
import { IValues, IVisibility } from "../../types/generation.types";

interface IProps {
  appearComponent: boolean;
  values: IValues;
  handleChange: any;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
}

export const LocationStep = ({
  appearComponent,
  values,
  handleChange,
  setFieldValue,
}: IProps) => {
  const { windowSize } = useGetWidth();
  const countries = Country.getAllCountries();
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [statesVisibility, setStatesVisibility] = useState<boolean>(false);
  const [citiesVisibility, setCitiesVisibility] = useState<boolean>(false);

  const visibility: IVisibility = {
    stateVisibility: statesVisibility,
    setStateVisibility: setStatesVisibility,
    cityVisibility: citiesVisibility,
    setCityVisibility: setCitiesVisibility,
  };

  useEffect(() => {
    setStates(State.getStatesOfCountry(values.country));
    setCities([]);
    setFieldValue("state", "");
    setFieldValue("city", "");
  }, [values.country]);

  useEffect(() => {
    setCities(City.getCitiesOfState(values.country, values.state));
  }, [values.state]);

  return (
    <div
      className={css(
        windowSize <= 1190 ? inputContainerMobile : inputContainerDesktop,
        `
    opacity: ${appearComponent ? 1 : 0};
    transition-delay: ${windowSize <= 1190 ? 800 : 1300}ms;
    `
      )}
    >
      <CountrySelector
        locationValue={values.country}
        handleChange={handleChange("country")}
        type={"Country"}
        array={countries}
      />
      <StateSelector
        locationValue={values.state}
        handleChange={handleChange("state")}
        type={"State"}
        array={states}
        visibility={visibility}
      />
      <CitySelector
        locationValue={values.city}
        handleChange={handleChange("city")}
        type={"City"}
        array={cities}
        visibility={visibility}
      />
    </div>
  );
};
