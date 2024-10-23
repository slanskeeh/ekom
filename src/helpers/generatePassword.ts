export interface PasswordState {
  length: number;
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
  avoidDuplicates: boolean;
  generatedPasswords: string[];
  setLength: (length: number) => void;
  toggleOption: (
    option: keyof Omit<
      PasswordState,
      | "length"
      | "generatedPasswords"
      | "setLength"
      | "toggleOption"
      | "generatePasswords"
    >
  ) => void;
  generatePasswords: () => void;
}

export function generatePassword(state: PasswordState): string {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "%*)?@#$~";

  let chars = "";
  if (state.useUppercase) chars += uppercaseChars;
  if (state.useLowercase) chars += lowercaseChars;
  if (state.useNumbers) chars += numberChars;
  if (state.useSymbols) chars += symbolChars;

  let password = "";
  for (let i = 0; i < state.length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    const char = chars[randomIndex];
    if (state.avoidDuplicates && password.includes(char)) {
      i--;
      continue;
    }
    password += char;
  }

  return password;
}
