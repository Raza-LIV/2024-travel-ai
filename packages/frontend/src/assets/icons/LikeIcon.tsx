import { COLORS } from "../../constants/colors";
import { ICurrentIcon } from "../../types/icon.types";

export const LikeIcon = ({ isLiked, size }: ICurrentIcon) => {
  return (
    <svg
      style={{ transitionDuration: "300ms" }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={isLiked ? COLORS.SECONDARY : COLORS.PRIMARY}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z"
        fill={isLiked ? COLORS.ERROR : COLORS.SECONDARY}
      />
    </svg>
  );
};