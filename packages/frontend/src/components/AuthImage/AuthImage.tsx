import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import ImageBg from "../../assets/images/travel_img.jpeg";
import { LogInButton } from "../LogInButton/LogInButton";
import { ClockIcon } from "../ClockIcon";
import { COLORS } from "../../constants/colors";
import {
  backgroundImage,
  buttonContainer,
  descriptionPart,
  descriptionText,
  headerText,
  logInText,
  mantleContainer,
  visualContent,
} from "./AuthImage.styled";

interface IProps {
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthImage = ({ isSignUp, setIsSignUp }: IProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className={css(visualContent, `left: ${isSignUp ? 0 : "450px"}`)}
      onClick={() => setIsSignUp((prev) => !prev)}
    >
      <img
        className={css(
          backgroundImage,
          `
                transform: translate(
                  calc(-${position.x * 0.1}% + 20px),
                  calc(-${position.y * 0.1}% + 35px)
                );
              `
        )}
        src={ImageBg}
        alt="Happy traveler"
      />
      <div className={mantleContainer}>
        <div className={headerText}>WELCOME BACK</div>
        <div className={descriptionPart}>
          {/* may  be should delate description */}
          <div className={descriptionText}>
            Some text aboute this amazing app and wonderful trips which are
            waiting for you
          </div>
          <div className={logInText}>Log in with social media</div>
          <div className={buttonContainer}>
            <LogInButton
              icon={<ClockIcon color={COLORS.PRIMARY} size={"40"} />}
            />
            <LogInButton
              icon={<ClockIcon color={COLORS.PRIMARY} size={"40"} />}
            />
            <LogInButton
              icon={<ClockIcon color={COLORS.PRIMARY} size={"40"} />}
            />
            <LogInButton
              icon={<ClockIcon color={COLORS.PRIMARY} size={"40"} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
