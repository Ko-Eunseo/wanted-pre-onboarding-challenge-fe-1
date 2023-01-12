import * as StyledBtn from './StyledButton';
import { ButtonProps } from './ButtonType';

const Button = ({ children, styles, onClick, disabled, type, tabIndex }: ButtonProps) => {
  const buttonStyle = StyledBtn.BUTTON_STYLE[styles];
  return (
    <>
      <StyledBtn.StyledBtn
      buttonStyle={buttonStyle} 
      onClick={onClick} 
      disabled={disabled}
      type={type}
      tabIndex={tabIndex}
      >
        {children}
      </StyledBtn.StyledBtn>
    </>
  )
}

export default Button;
