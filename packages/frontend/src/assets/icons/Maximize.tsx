import { IStyledIcon } from "../../types/icon.types";

export const Maximize = ({ color, size }: IStyledIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="4.5" stroke={color} />
      <path
        d="M12.8312 29.2C12.8312 28.3875 14.0812 28.3875 14.0812 29.2V33.0375L14.0937 33.025C16.6187 30.5 19.1562 27.9625 21.6812 25.4375C22.2562 24.875 23.1312 25.75 22.5687 26.325C22.2062 26.6875 21.8437 27.0375 21.4812 27.4C19.3062 29.575 17.1437 31.75 14.9687 33.925H18.8062C19.6187 33.925 19.6062 35.175 18.8062 35.175H13.4562C13.2687 35.175 13.1312 35.1125 13.0312 35C13.0187 34.9875 13.0062 34.9875 13.0062 34.975C12.9187 34.9 12.8562 34.7875 12.8437 34.65C12.8325 34.5525 12.8312 29.2 12.8312 29.2Z"
        fill={color}
      />
      <path
        d="M35.1687 13.45V18.8C35.1687 19.6125 33.9187 19.6125 33.9187 18.8V14.9625L33.9062 14.975C31.3687 17.5 28.8437 20.0375 26.3187 22.5625C25.7437 23.125 24.8687 22.25 25.4312 21.675C25.7937 21.3125 26.1562 20.9625 26.5062 20.6C28.6937 18.425 30.8562 16.25 33.0312 14.075H29.1937C28.3812 14.075 28.3812 12.825 29.1937 12.825H34.5437C34.7312 12.825 34.8687 12.8875 34.9687 13C34.9812 13.0125 34.9937 13.0125 34.9937 13.025C35.1062 13.125 35.1687 13.2625 35.1687 13.45Z"
        fill={color}
      />
    </svg>
  );
};
