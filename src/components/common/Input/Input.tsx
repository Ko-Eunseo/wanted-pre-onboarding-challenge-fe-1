import * as InputStyle from './InputStyle';
export type InputProps = {
  name?: string;
  id?: string;
  type: 'text' | 'email' | 'password';
  onChange: React.ChangeEventHandler;
  placeholder?: string;
  border?: string;
  value?: string;
}

const Input = ({ name, id, type, onChange, placeholder, border, value }: InputProps) => {
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
      />
    </>
  )
}

export default Input;
