import { IStyledIcon } from "../../types/icon.types";

export const EditIcon = ({ color, size }: IStyledIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.43495 26.1512C10.5937 26.1512 16.7512 26.1512 22.9099 26.1512C23.7949 26.1512 24.6799 26.1512 25.5649 26.1512C26.3687 26.1512 26.3712 24.9012 25.5649 24.9012C19.4062 24.9012 13.2487 24.9012 7.08995 24.9012C6.20495 24.9012 5.31995 24.9012 4.43495 24.9012C3.6312 24.9012 3.62995 26.1512 4.43495 26.1512Z"
        fill={color}
      />
      <path
        d="M12.1374 21.455C12.6624 21.305 13.1499 21.03 13.5374 20.6425L25.4624 8.71751C26.3124 7.86751 26.3124 6.48001 25.4624 5.63001L24.2874 4.4675C23.4624 3.6425 22.0249 3.6425 21.1999 4.4675L9.27494 16.38C8.88744 16.7675 8.61244 17.255 8.47494 17.78L7.54994 21.23C7.46244 21.555 7.54994 21.8925 7.78744 22.13C7.96244 22.305 8.21244 22.405 8.44994 22.405L12.1374 21.455ZM12.6499 19.755C12.4249 19.9925 12.1249 20.155 11.8124 20.2425L10.5999 20.5675L9.34994 19.3175L9.67494 18.105C9.76244 17.7925 9.92494 17.505 10.1624 17.2675L10.6374 16.805L13.1249 19.2925L12.6499 19.755ZM14.0124 18.405L11.5249 15.9175L19.9374 7.50501L22.4249 9.99251L14.0124 18.405ZM24.5749 7.84251L23.3124 9.10501L20.8249 6.61751L22.0874 5.34251C22.2624 5.16751 22.4999 5.06751 22.7499 5.06751C22.9999 5.06751 23.2374 5.16751 23.4124 5.34251L24.5749 6.51751C24.9374 6.88001 24.9374 7.46751 24.5749 7.84251Z"
        fill={color}
      />
    </svg>
  );
};
