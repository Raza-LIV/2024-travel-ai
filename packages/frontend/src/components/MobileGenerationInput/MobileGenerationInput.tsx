import {
  generationInput,
  generationInputError,
  inputError,
  inputWithoutError,
} from "./MobileGenerationInput.styled";

interface IProps {
  holdText: string;
  errorMessage?: string;
  inputWidth?: number;
}

export const MobileGenerationInput = ({
  holdText,
  errorMessage,
  inputWidth,
}: IProps) => {
  return (
    <div
      style={{
        width: inputWidth ? `${inputWidth}%` : "100%",
        margin: "0 0 10px 0",
      }}
    >
      <input
        className={errorMessage ? generationInputError : generationInput}
        type="text"
        placeholder={holdText}
      />
      <div className={errorMessage ? inputError : inputWithoutError}>
        {errorMessage}
      </div>
    </div>
  );
};
