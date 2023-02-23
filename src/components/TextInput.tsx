import { HtmlHTMLAttributes, useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface TextInputProps { 
  inputText: string;
  inputType: string;
  displayText: string;
	inputValue: string | number;
  placeHolder?: string;
	onChangeEvent: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const[errorMessage, setErrorMessage] = useState<string | undefined>("");

  const validate: (target:HTMLInputElement | HTMLTextAreaElement) => string = (target) => {
    let err = " ";
    switch (target.id) {
        case "speciesName":
          err = "Error!";
        if(target.value.match(/^[A-Za-z]+$/) === null)
        {
          err += "Please enter alphabet characters";
        }
        else if (
          target.value.match(/^[A-Za-z]+$/) !== null &&
          (target.value.length < 3 || target.value.length > 23)
        ) {
          err = "Input length must be between 3 to 23 characters";
        } 
        break;
      case "planetName":
        err = "Error!";
        if(target.value.match(/^[A-Za-z0-9]*$/) === null)
        {
          err += "Please enter only alphabet characters and numbers";
        }
        else if (
          target.value.match(/^[A-Za-z0-9]*$/) !== null &&
          (target.value.length < 2 || target.value.length > 49)
        ) {
          err += "Input length must be between 2 to 49 characters";
        }
        break;
      case "numberOfBeings":
       
        if (
          parseInt(target.value) === 0 ||
          parseInt(target.value) > 1000000000
        ) {
          err = "Error! Please enter valid number";
        } 
        break;
      case "reasonForSparing":
        if (target.value.length < 17 || target.value.length > 153) {
          err = "Error! Entered text must be between 17 to 153 characters";
        } 
        break;
      default:
         err = " ";
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
          onChange={(e) => {const errorMessage = validate(e.target); 
            setErrorMessage(errorMessage);
            props.onChangeEvent(e)}}
        />
      ) : (
        <input
          id={props.inputText}
          type={props.inputType}
          value={props.inputValue}
          placeholder={props.placeHolder}
          onChange={(e) => {const errorMessage = validate(e.target); 
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
