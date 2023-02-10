import { useState } from "react";
import TextInput from "./TextInput";
import W12MHeader from "./W12MHeader";
import Button from "./Button";

const W12MForm = () => {
  type formData = {
    speciesName: string;
    planetName: string;
    numberOfBeings: string;
    whatIs: string;
    reasonForSparing: string;
  };

  const [inputData, setInputData] = useState<formData>({
    speciesName: "humans",
    planetName: "earth",
    numberOfBeings: "1",
    whatIs: " ",
    reasonForSparing: "",
  });

  const submitForm = () => {
    console.log(inputData);
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <TextInput
        inputText="speciesName"
        displayText="Species Name"
        inputType="text"
        inputValue={inputData.speciesName}
        onChangeEvent={(e) => {
          const newFormData = { ...inputData };
          newFormData.speciesName = e.target.value;
          setInputData(newFormData);
        }}
      />
      <TextInput
        inputText="planetName"
        displayText="Planet Name"
        inputType="text"
        inputValue={inputData.planetName}
        onChangeEvent={(e) => {
          const newFormData = { ...inputData };
          newFormData.planetName = e.target.value;
          setInputData(newFormData);
        }}
      />
      <TextInput
        inputText="numberOfBeings"
        displayText="Number of Beings"
        inputType="text"
        inputValue={inputData.numberOfBeings}
        onChangeEvent={(e) => {
          const newFormData = { ...inputData };
          newFormData.numberOfBeings = e.target.value;
          setInputData(newFormData);
        }}
      />
      <TextInput
        inputText="whatIs"
        displayText="What is 2 + 2?"
        inputType="select"
        inputValue={inputData.whatIs}
        onChangeEvent={(e) => {
          const newFormData = { ...inputData };
          newFormData.whatIs = e.target.value;
          setInputData(newFormData);
        }}
      />
      <TextInput
        inputText="reasonForSparing"
        displayText="Reason for Sparing"
        inputType="textarea"
        inputValue={inputData.reasonForSparing}
        onChangeEvent={(e) => {
          const newFormData = { ...inputData };
          newFormData.reasonForSparing = e.target.value;
          setInputData(newFormData);
        }}
      />
      <Button onClickHandler={submitForm}></Button>
    </section>
  );
};

export default W12MForm;
