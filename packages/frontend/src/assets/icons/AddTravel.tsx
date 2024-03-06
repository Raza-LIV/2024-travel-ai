export interface IProps {
  size: string;
}

export const AddTravelIcon = ({ size }: IProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.3576 52.3251H27.6426C26.061 52.3237 24.5445 51.6949 23.4262 50.5765C22.3078 49.4581 21.6789 47.9417 21.6776 46.3601V38.2501L13.6401 38.3226C12.0585 38.3206 10.5421 37.6916 9.42352 36.5734C8.3049 35.4553 7.67525 33.9392 7.67261 32.3576V27.6426C7.67459 26.0605 8.30395 24.5438 9.42264 23.4251C10.5413 22.3064 12.058 21.677 13.6401 21.6751H21.7501L21.6776 13.64C21.6789 12.0584 22.3078 10.542 23.4262 9.42362C24.5445 8.30525 26.061 7.67637 27.6426 7.67505H32.3576C33.9392 7.67637 35.4557 8.30525 36.574 9.42362C37.6924 10.542 38.3213 12.0584 38.3226 13.64V21.7501L46.3601 21.6751C47.9422 21.677 49.4589 22.3064 50.5776 23.4251C51.6963 24.5438 52.3256 26.0605 52.3276 27.6426V32.3576C52.325 33.9392 51.6953 35.4553 50.5767 36.5734C49.4581 37.6916 47.9417 38.3206 46.3601 38.3226H38.2501L38.3201 46.3601C38.3188 47.9412 37.6902 49.4573 36.5724 50.5756C35.4546 51.6939 33.9388 52.3231 32.3576 52.3251ZM13.6401 24.1751C12.7207 24.1757 11.8391 24.5413 11.1889 25.1914C10.5388 25.8415 10.1733 26.7231 10.1726 27.6426V32.3576C10.1739 33.2766 10.5398 34.1575 11.1898 34.8071C11.8399 35.4567 12.7211 35.8219 13.6401 35.8226H21.7501C22.3941 35.8226 23.0119 36.0782 23.4675 36.5334C23.9231 36.9886 24.1794 37.606 24.1801 38.2501V46.3601C24.1814 47.2786 24.5469 48.1592 25.1964 48.8087C25.846 49.4582 26.7265 49.8237 27.6451 49.8251H32.3601C33.2787 49.8237 34.1592 49.4582 34.8088 48.8087C35.4583 48.1592 35.8238 47.2786 35.8251 46.3601V38.2501C35.8258 37.606 36.0821 36.9886 36.5377 36.5334C36.9934 36.0782 37.6111 35.8226 38.2551 35.8226H46.3626C47.2816 35.8219 48.1628 35.4567 48.8129 34.8071C49.463 34.1575 49.8288 33.2766 49.8301 32.3576V27.6426C49.8294 26.7227 49.4636 25.8407 48.8129 25.1905C48.1622 24.5403 47.28 24.1751 46.3601 24.1751H38.2501C37.6065 24.1751 36.9892 23.9197 36.5336 23.4651C36.078 23.0105 35.8214 22.3937 35.8201 21.7501V13.64C35.8188 12.7219 35.4536 11.8417 34.8047 11.1923C34.1557 10.5428 33.2757 10.177 32.3576 10.175H27.6426C26.724 10.1764 25.8435 10.5419 25.1939 11.1914C24.5444 11.8409 24.1789 12.7215 24.1776 13.64V21.7501C24.1763 22.3937 23.9197 23.0105 23.4641 23.4651C23.0085 23.9197 22.3912 24.1751 21.7476 24.1751H13.6401Z"
        fill="#191970"
        fill-opacity="0.3"
      />
    </svg>
  );
};