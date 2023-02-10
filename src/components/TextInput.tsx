interface TextInputProps { 
  inputText: string;
  inputType: string;
  displayText: string;
	inputValue: string;
	onChangeEvent: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => (
  <>
    <div className="formInputs">
      <label htmlFor={props.inputText}>{props.displayText}</label>
      {props.inputType === "select" ? (
        <select
          name={props.inputText}
          id={props.inputText}
          onChange={props.onChangeEvent}
        >
          <option value="none">none</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="3">3</option>
        </select>
      ) : props.inputType === "textarea" ? (
        <textarea
          id={props.inputText}
          rows={5}
          cols={50}
          value={props.inputValue}
          onChange={props.onChangeEvent}
        />
      ) : (
        <input
          id={props.inputText}
          type={props.inputType}
          value={props.inputValue}
          onChange={props.onChangeEvent}
        />
      )}
    </div>
  </>
);

export default TextInput;
