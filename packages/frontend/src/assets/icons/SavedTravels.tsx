import { COLORS } from "../../constants/colors";

interface IProps {
  isPrimaryColor: boolean;
  size: string;
}

export const SavedIcon = ({ isPrimaryColor, size }: IProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3583 11.6917L26.4417 6.04166C25.6948 5.44152 24.7664 5.11248 23.8083 5.10833H7.60834C6.9453 5.10833 6.30941 5.37172 5.84057 5.84056C5.37173 6.3094 5.10834 6.94529 5.10834 7.60833V32.3917C5.10834 33.0547 5.37173 33.6906 5.84057 34.1594C6.30941 34.6283 6.9453 34.8917 7.60834 34.8917H32.3917C33.0547 34.8917 33.6906 34.6283 34.1594 34.1594C34.6283 33.6906 34.8917 33.0547 34.8917 32.3917V14.925C34.8915 14.3061 34.7538 13.695 34.4887 13.1359C34.2235 12.5767 33.8374 12.0834 33.3583 11.6917ZM10.9417 6.775H20.525V9.05833C20.525 9.27934 20.4372 9.4913 20.2809 9.64759C20.1246 9.80387 19.9127 9.89166 19.6917 9.89166H11.775C11.554 9.89166 11.342 9.80387 11.1857 9.64759C11.0295 9.4913 10.9417 9.27934 10.9417 9.05833V6.775ZM10.9417 33.225V23.3417C10.9417 22.6786 11.2051 22.0427 11.6739 21.5739C12.1427 21.1051 12.7786 20.8417 13.4417 20.8417H26.5583C27.2214 20.8417 27.8573 21.1051 28.3261 21.5739C28.7949 22.0427 29.0583 22.6786 29.0583 23.3417V33.225H10.9417ZM33.225 32.3917C33.225 32.6127 33.1372 32.8246 32.9809 32.9809C32.8246 33.1372 32.6127 33.225 32.3917 33.225H30.725V23.3417C30.7219 22.2375 30.2819 21.1795 29.5012 20.3988C28.7205 19.6181 27.6625 19.1781 26.5583 19.175H13.4417C12.3366 19.175 11.2768 19.614 10.4954 20.3954C9.71399 21.1768 9.275 22.2366 9.275 23.3417V33.225H7.60834C7.38732 33.225 7.17536 33.1372 7.01908 32.9809C6.8628 32.8246 6.775 32.6127 6.775 32.3917V7.60833C6.775 7.38732 6.8628 7.17535 7.01908 7.01907C7.17536 6.86279 7.38732 6.775 7.60834 6.775H9.275V9.05833C9.275 9.72137 9.5384 10.3573 10.0072 10.8261C10.4761 11.2949 11.112 11.5583 11.775 11.5583H19.6917C20.3547 11.5583 20.9906 11.2949 21.4594 10.8261C21.9283 10.3573 22.1917 9.72137 22.1917 9.05833V6.775H23.8083C24.3854 6.77729 24.9442 6.97729 25.3917 7.34166L32.2917 12.975C32.5848 13.2081 32.8211 13.5047 32.9828 13.8425C33.1445 14.1804 33.2273 14.5505 33.225 14.925V32.3917Z"
        fill={isPrimaryColor ? COLORS.PRIMARY : COLORS.SECONDARY}
      />
    </svg>
  );
};
