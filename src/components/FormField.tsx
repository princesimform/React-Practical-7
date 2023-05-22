import { InputFieldType } from "./interface/interfaceList";
const Name: InputFieldType = {
  type: "text",
  name: "name",
  lable: "Name",
  id: "exampleInputName1",
};

const Email: InputFieldType = {
  type: "email",
  name: "email",
  lable: "Email address",
  id: "exampleInputEmail1",
};

const PhoneNo: InputFieldType = {
  type: "text",
  name: "phone_no",
  lable: "Phone No.",
  id: "exampleInputPhone1",
};
const Password: InputFieldType = {
  type: "password",
  name: "password",
  lable: "Password",
  id: "exampleInputpassword1",
};
const ConfirmPassword: InputFieldType = {
  type: "password",
  name: "confirm_password",
  lable: "Confirm Password",
  id: "exampleInputconfirmpassword1",
};
export { Name, Email, PhoneNo, Password, ConfirmPassword };
