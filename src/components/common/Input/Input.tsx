import * as InputStyle from './InputStyle';
import { InputProps } from './InputType';

const Input = ({ name, id, type, onChange, placeholder, border, value, tabIndex }: InputProps) => {
  const borderStyle = InputStyle.BORDER[border];
  return (
    <>
      <label htmlFor={id}></label>
      <InputStyle.InputStyle
      id={id} 
      name={name}
      type={type} 
      onChange={onChange} 
      placeholder={placeholder} 
      borderStyle={borderStyle}
      value={value}
      tabIndex={tabIndex}
      />
    </>
  )
}

export default Input;
