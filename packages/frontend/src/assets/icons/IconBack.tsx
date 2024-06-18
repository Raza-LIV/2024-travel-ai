import { COLORS } from "../../constants/colors";
import { IStyledIcon } from "../../types/icon.types";

export const IconBack = ({ color, size }: IStyledIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 512 404.43"
      stroke={COLORS.PRIMARY}
      strokeWidth="1"
    >
      <path
        fill={color}
        d="m68.69 184.48 443.31.55v34.98l-438.96-.54 173.67 159.15-23.6 25.79L0 199.94 218.6.02l23.6 25.79z"
      />
    </svg>
  );
};
