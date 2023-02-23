import { render, screen } from "@testing-library/react";
import TextInput, { TextInputProps } from "./TextInput";
import user from "@testing-library/user-event";

describe("<TextInput>", () => {
  it(`reder <Input> box with provided props`, () => {
    const validSpeciesName: TextInputProps = {
      inputText: "speciesName",
      inputType: "text",
      
      displayText: "Species Name",
      inputValue: "",
      placeHolder: "Enter Species Name",
      onChangeEvent: jest.fn(),
    };
    render(<TextInput {...validSpeciesName} />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("renders basic fields given required props", () => {
    const requiredProps: TextInputProps = {
      inputText: "speciesName",
      inputType: "text",
      
      displayText: "Species Name",
      inputValue: "",
      placeHolder: "Enter Species Name",
      onChangeEvent: jest.fn(),
    };
    render(<TextInput {...requiredProps} />);

    const byPlaceholder = screen.getByPlaceholderText("Enter Species Name");
    const label = screen.getByText("Species Name");

    expect(byPlaceholder).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("sets the value to a provided value", () => {
    const requiredProps: TextInputProps = {
      inputText: "speciesName",
      inputType: "text",
      
      displayText: "Species Name",
      inputValue: "Humans",
      placeHolder: "Enter Species Name",
      onChangeEvent: jest.fn(),
    };
    render(<TextInput {...requiredProps} />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("Humans");
  });

  it("<input> calls onChange with the correct parameters when a new value is entered", async () => {
    const mockChangeHandler = jest.fn();

    const requiredProps: TextInputProps = {
      inputText: "speciesName",
      inputType: "text",
      displayText: "Species Name",
      inputValue: "Humans",
      placeHolder: "Enter Species Name",
      onChangeEvent: mockChangeHandler,
    };
    render(<TextInput {...requiredProps} />);

    await user.type(screen.getByRole("textbox"), "Humans");

    expect(mockChangeHandler).toHaveBeenCalledTimes(6); // "H", "u", "m", "a", "n", "s"
    
  });

  it("Sets the new value", async () => {
    const mockChangeHandler = jest.fn();

    const requiredProps: TextInputProps = {
      inputText: "speciesName",
      inputType: "text",
      displayText: "Species Name",
      inputValue: " ",
      placeHolder: "Enter Species Name",
      onChangeEvent: mockChangeHandler,
    };
    render(<TextInput {...requiredProps} />);
    await user.type(screen.getByRole("textbox"), "Animals");
    expect(mockChangeHandler).toHaveBeenCalledWith("s", "Animals");
  });
});
