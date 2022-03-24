import { useField } from "formik";

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="col-md-4 mb-3">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="custom-select d-block w-100" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MySelect;
