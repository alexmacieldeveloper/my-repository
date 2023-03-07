import * as React from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
  btnText,
  variant,
  margin,
  onClick,
}) => {
  return (
    <StyledButton variant={variant} margin={margin} onClick={onClick}>
      {btnText}
    </StyledButton>
  );
};

export default Button;
