import * as StyledBtn from './StyledButton';
export type ButtonProps = {
  children: React.ReactNode;
  styles: string;
  onClick?: any;
  disabled?: boolean;
  type: 'submit'|'button'|'reset';
}
const Button = ({ children, styles, onClick, disabled, type }: ButtonProps) => {
  const buttonStyle = StyledBtn.BUTTON_STYLE[styles];
  return (
    <>
      <StyledBtn.StyledBtn
      buttonStyle={buttonStyle} 
      onClick={onClick} 
      disabled={disabled}
      type={type}
      >
        {children}
      </StyledBtn.StyledBtn>
    </>
  )
}

export default Button;
