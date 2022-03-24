import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="col-md-6 mb-3">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input type="text" className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <p className="text-danger">{meta.error}</p>
        ) : null}
      </div>
    </>
  );
};

export default MyTextInput;
