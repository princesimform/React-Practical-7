import * as Yup from "yup";

const validationSchemaSignup = Yup.object({
  // profileImage: Yup.mixed().required("Profile image is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  phone_no: Yup.string().required("Mobile No is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().required("Confirm Password is required"),
});

const validationSchemaLogin = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export { validationSchemaSignup, validationSchemaLogin };
