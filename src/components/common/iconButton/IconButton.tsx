import * as IconButtonStyle from './IconButtonStyle';

const IconButton = ({children, onClick, tabIndex }) => {
  return (
    <IconButtonStyle.IconButtonStyle tabIndex={tabIndex} onClick={onClick}>
      {children}
    </IconButtonStyle.IconButtonStyle>
  )
};

export default IconButton;