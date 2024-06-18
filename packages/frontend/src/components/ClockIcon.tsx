import { IStyledIcon } from "../types/icon.types";

export const ClockIcon = ({ color, size }: IStyledIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.8933 16.1417C2.6433 21.69 4.18497 27.5417 8.19164 31.6183C11.9466 35.4383 17.3766 37.1667 22.6533 36.345C27.8116 35.5417 32.425 32.1417 34.7683 27.4833C37.2 22.6483 37.115 16.8 34.5133 12.0483C31.62 6.76333 25.99 3.50667 19.9933 3.45333C19.5433 3.45 19.16 3.83833 19.16 4.28667C19.16 6.62 19.16 8.955 19.16 11.2883C19.16 12.36 20.8266 12.3633 20.8266 11.2883C20.8266 8.955 20.8266 6.62 20.8266 4.28667C20.5483 4.565 20.2716 4.84167 19.9933 5.12C24.7833 5.16333 29.3583 7.45167 32.1366 11.3867C34.9083 15.3133 35.6216 20.3983 34.0466 24.94C32.5033 29.3917 28.775 32.9333 24.2633 34.2767C19.6616 35.6467 14.5516 34.6917 10.7783 31.7117C6.24164 28.1267 4.23497 22.2033 5.49997 16.585C5.73664 15.54 4.12997 15.0933 3.8933 16.1417Z"
        fill={color}
      />
      <path
        d="M12.3333 13.5283C11.5733 12.7683 12.7533 11.59 13.5116 12.35L20.5833 19.4217C21.3433 20.1817 20.165 21.36 19.405 20.6L12.3333 13.5283Z"
        fill={color}
      />
    </svg>
  );
};