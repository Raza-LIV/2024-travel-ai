import React from "react";

interface IProps {
  size: string;
}

export const InfoIcon = ({ size }: IProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.375 18.7513C14.375 19.555 15.625 19.5575 15.625 18.7513V13.7288C15.625 12.925 14.375 12.9225 14.375 13.7288V18.7513Z"
        fill="#191970"
        fill-opacity="0.3"
      />
      <path
        d="M15 11.8762C15.3452 11.8762 15.625 11.5964 15.625 11.2512C15.625 10.906 15.3452 10.6262 15 10.6262C14.6548 10.6262 14.375 10.906 14.375 11.2512C14.375 11.5964 14.6548 11.8762 15 11.8762Z"
        fill="#191970"
        fill-opacity="0.3"
      />
      <path
        d="M15 2.58374C21.8475 2.58374 27.4175 8.15374 27.4175 15C27.4175 21.8462 21.8475 27.4162 15 27.4162C8.15249 27.4162 2.58249 21.8462 2.58249 15C2.58249 8.15374 8.15249 2.58374 15 2.58374ZM15 26.1662C21.1575 26.1662 26.1675 21.1575 26.1675 15C26.1675 8.84249 21.1575 3.83374 15 3.83374C8.84249 3.83374 3.83249 8.84249 3.83249 15C3.83249 21.1575 8.84249 26.1662 15 26.1662Z"
        fill="#191970"
        fill-opacity="0.3"
      />
    </svg>
  );
};