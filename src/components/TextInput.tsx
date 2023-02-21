import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface TextInputProps { 
  inputText: string;
  inputType: string;
  displayText: string;
	inputValue: string | number;
	onChangeEvent: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const[errorMessage, setErrorMessage] = useState<string | undefined>("");
  const validate = (value:string) => {
    let err = " ";
    /* if (target.value.length > 1 && target.id === "numberOfBeings" && isNaN(target.value)) {
      err = "Please enter valid number";
    }
    else if(target.value.length > 1 && typeof target.value !== "string")
    {
      err = "Please enter valid string";
    } */
    if(value.length === 0)
    {
      err = "Please enter a valid input";
    }
    return err;
  }

  return(
    <div className="formInputs">
      <label className="formLabel" htmlFor={props.inputText}>{props.displayText}</label>
      <div className="formInputDiv">
        
      {props.inputType === "textarea" ? (
        <textarea
          id={props.inputText}
          rows={5}
          cols={50}
          value={props.inputValue}
          onChange={(e) => {const errorMessage = validate(e.target.value); 
            setErrorMessage(errorMessage);
            props.onChangeEvent(e)}}
        />
      ) : (
        <input
          id={props.inputText}
          type={props.inputType}
          value={props.inputValue}
          onChange={(e) => {const errorMessage = validate(e.target.value); 
            setErrorMessage(errorMessage);
            props.onChangeEvent(e)}}
        />
      )}
      <ErrorMessage errorMessage={errorMessage}></ErrorMessage>
      </div>
    </div>
  )
}

export default TextInput;
