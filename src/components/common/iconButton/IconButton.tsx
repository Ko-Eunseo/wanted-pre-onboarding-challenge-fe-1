import * as IconButtonStyle from './IconButtonStyle';
import { ButtonProps } from '../button/ButtonType';

const IconButton = ({ children, onClick, tabIndex }: ButtonProps) => {
  return (
    <IconButtonStyle.IconButtonStyle tabIndex={tabIndex} onClick={onClick}>
      {children}
    </IconButtonStyle.IconButtonStyle>
  )
};

export default IconButton;