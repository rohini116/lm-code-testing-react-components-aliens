import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface SelectInputProps {
  inputText: string;
  inputType: string;
  displayText: string;
  inputValue: string;
  onChangeEvent: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>("");
    const validate = (value:String) => {
        let err = "";
        if(value === "none")
        {
            err = "Please select valid answer";
        }
        else if(value !== "4")
        {
            err = "Wrong Answer";
        }
        return err;
    };
  return (
    <div className="formInputs">
      <label className="formLabel" htmlFor={props.inputText}>
        {props.displayText}
      </label>
      <div className="formInputDiv">
        <select
          name={props.inputText}
          id={props.inputText}
          onChange={(e) => {
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            props.onChangeEvent(e);
          }}
        >
          <option value="none">none</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="3">3</option>
        </select>
        <ErrorMessage errorMessage={errorMessage}></ErrorMessage>
      </div>
    </div>
  );
};

export default SelectInput;
