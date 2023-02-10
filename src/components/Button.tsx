import React from "react";

interface buttonProps {
  onClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
}
const Button: React.FC<buttonProps> = ({ onClickHandler }) => (
  <>
    <button type="button" onClick={onClickHandler}>
      Submit Form
    </button>
  </>
);


export default Button;