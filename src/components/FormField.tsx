import { InputFieldType } from "./interface/interfaceList";
import * as Yup from "yup";

const Name: InputFieldType = {
  type: "text",
  name: "name",
  lable: "Name",
  id: "exampleInputName1",
  validation: Yup.string().required("Name is required"),
};

const Email: InputFieldType = {
  type: "email",
  name: "email",
  lable: "Email address",
  id: "exampleInputEmail1",
  validation: Yup.string().required("Email is required"),
};

const PhoneNo: InputFieldType = {
  type: "text",
  name: "phone_no",
  lable: "Phone No.",
  id: "exampleInputPhone1",
  validation: Yup.string().required("Mobile No is required"),
};
const Password: InputFieldType = {
  type: "password",
  name: "password",
  lable: "Password",
  id: "exampleInputpassword1",
  validation: Yup.string().required("Password is required"),
};
const ConfirmPassword: InputFieldType = {
  type: "password",
  name: "confirm_password",
  lable: "Confirm Password",
  id: "exampleInputconfirmpassword1",
  validation: Yup.string().required("Confirm Password is required"),
};
export { Name, Email, PhoneNo, Password, ConfirmPassword };
