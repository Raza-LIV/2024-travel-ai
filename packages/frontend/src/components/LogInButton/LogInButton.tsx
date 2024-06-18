import { container } from "./LogInButton.modules";

interface IProps {
  icon: JSX.Element;
}

export const LogInButton = ({ icon }: IProps) => {
  return (
    <div className={container} onClick={(e) => e.stopPropagation()}>
      {icon}
    </div>
  );
};
