import { useState } from 'react';

const useInput = (init, validation) => {
  const [value, setValue] = useState(init);
  const [alert, setAlert] = useState(true);
  const onChange = (event) => {
    let passValidation = true;
    if (typeof validation === 'function') {
      passValidation = validation(event.target.value);
    };
    if(passValidation) {
      setAlert(false);
    } else {
      setAlert(true);
    }
    setValue(event.target.value);
  };
  const reset = () => {
    setValue(init);
  }
  return [value, onChange, alert, reset];
};

export default useInput;