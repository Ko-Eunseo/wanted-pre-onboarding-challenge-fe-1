import { useState } from 'react';

const useInput = (init, validation) => {
  const [value, setValue] = useState(init);
  const [alert, setAlert] = useState(false);
  const onChange = (event) => {
    let passValidation = true;
    if (typeof validation === 'function') {
      setAlert(true);
      passValidation = validation(event.target.value);
    };
    if(!event.target.value) {
      setAlert(false);
    }
    if(passValidation) {
      setValue(event.target.value);
      setAlert(false);
    } else {
      setValue('');
      setAlert(true);
    }
  };
  const reset = () => {
    setValue(init);
  }
  return [value, onChange, alert, reset];
};

export default useInput;