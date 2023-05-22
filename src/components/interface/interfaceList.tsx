export interface InputFieldType {
  type: string;
  name: string;
  lable: string;
  id: string;
}

export interface signUpInitialValuesTypes {
  // profile: string;
  name: string;
  email: string;
  phone_no: string;
  password: string;
  confirm_password: string;
}

export interface loginInitialValuesTypes {
  email: string;
  password: string;
}
