export interface IFormInput {
  label: string;
  placeholder: string;
  setValue: (value: string) => void;
  inputValue: string;
  type?: "text" | "number";
}
