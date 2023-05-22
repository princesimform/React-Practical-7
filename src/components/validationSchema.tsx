import * as Yup from "yup";
import { ConfirmPassword, Email, Name, Password, PhoneNo } from "./FormField";
const validationSchemaSignup = Yup.object({
  // profileImage: Yup.mixed().required("Profile image is required"),
  name: Name.validation,
  email: Email.validation,
  phone_no: PhoneNo.validation,
  password: Password.validation,
  confirm_password: ConfirmPassword.validation,
});

const validationSchemaLogin = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export { validationSchemaSignup, validationSchemaLogin };
