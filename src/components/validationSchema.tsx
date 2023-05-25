import * as Yup from "yup";
const phoneRegExp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export interface YupSchemaInterface {
  profile: Yup.AnyObject;
  name: string;
  email: string;
  phone_no: string;
  password: string;
  confirm_password: string;
}

const validationSchemaSignup: Yup.ObjectSchema<YupSchemaInterface> =
  Yup.object().shape({
    profile: Yup.mixed()
      .required("A file is Require")
      .test(
        "fileSize",
        "Filesize is too large",
        (value: Yup.AnyObject) => value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value: Yup.AnyObject) =>
          value && SUPPORTED_FORMATS.includes(value.type)
      ),
    name: Yup.string().required("Name is required").min(15),
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email address"),
    phone_no: Yup.string()
      .required("Mobile No is required")
      .matches(phoneRegExp, "Phone number is not valid"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Password must match")
      .required("confirm password require"),
  });

const validationSchemaLogin = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export { validationSchemaSignup, validationSchemaLogin };
