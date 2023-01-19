import * as TextareaStyle from './TextareaStyle';

const Textarea = ({name, value, onChange}) => {
  return (
    <TextareaStyle.Textarea 
      name={name} 
      value={value} 
      onChange={onChange}
    />
  )
}

export default Textarea;
