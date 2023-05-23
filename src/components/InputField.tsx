import React from "react";
import { ErrorMessage, Field } from "formik";
interface PropsType {
  type: string;
  name: string;
  label: string;
  hasValidate?: boolean;
}
function InputField({ type, name, label, hasValidate = false }: PropsType) {
  console.log(hasValidate);

  return (
    <div>
      <div className='form-group text-left '>
        <label className='py-2 cursor-pointer' htmlFor=''>
          {label}
        </label>
        <Field
          type={type}
          id={type + name}
          aria-describedby='nameHelp'
          name={name}
          className='form-control'
        />
      </div>
      {hasValidate && (
        <ErrorMessage name={name} component='p' className='text-danger' />
      )}
    </div>
  );
}

export default InputField;
