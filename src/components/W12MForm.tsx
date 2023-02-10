import { useState } from 'react';
import TextInput from "./TextInput";
import W12MHeader from './W12MHeader';

const W12MForm = () => {
	type formData = {
		speciesName : string;
		planetName: string;
		numberOfBeings: string;
		whatIs: string;
		reasonForSparing: string; 
	} 
	const formDataObj = {
    speciesName: "humans",
    planetName: "earth",
    numberOfBeings: "1",
    whatIs: " ",
    reasonForSparing: "",
  };
	const [inputData, setInputData] = useState<formData>({...formDataObj});
	
	

	return (
    <section className="w12MForm">
      <W12MHeader />
      <TextInput
        inputText="speciesName"
        displayText="Species Name"
        inputType="text"
        inputValue={inputData.speciesName}
        onChangeEvent={(e) => {
          formDataObj.speciesName = e.target.value;
          setInputData(formDataObj);
        }}
      />
      <TextInput
        inputText="planetName"
        displayText="Planet Name"
        inputType="text"
        inputValue={inputData.planetName}
        onChangeEvent={(e) => {
          formDataObj.planetName = e.target.value;
          setInputData(formDataObj);
        }}
      />
      <TextInput
        inputText="numberOfBeings"
        displayText="Number of Beings"
        inputType="text"
        inputValue={inputData.numberOfBeings}
        onChangeEvent={(e) => {
          formDataObj.numberOfBeings = e.target.value;
          setInputData(formDataObj);
        }}
      />
      <TextInput
        inputText="whatIs"
        displayText="What is 2 + 2?"
        inputType="select"
        inputValue={inputData.whatIs}
        onChangeEvent={(e) => {
          formDataObj.whatIs = e.target.value;
          setInputData(formDataObj);
        }}
      />
      <TextInput
        inputText="reasonForSparing"
        displayText="Reason for Sparing"
        inputType="textarea"
        inputValue={inputData.reasonForSparing}
        onChangeEvent={(e) => {
          formDataObj.reasonForSparing = e.target.value;
          setInputData(formDataObj);
        }}
      />
    </section>
  );
};

export default W12MForm;
