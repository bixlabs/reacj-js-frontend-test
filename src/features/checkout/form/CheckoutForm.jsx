import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";
import MyButton from "./MyButton";
import { useDispatch } from "react-redux";
import { createOrder } from "../checkoutActions";

const CheckoutForm = ({ service, tier }) => {
  console.log(service, tier);
  const dispatch = useDispatch();
  return (
    <>
      <h4 className="mb-3">Billing address</h4>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          country: "",
          state: "",
          zip: "",
          paymentProvider: "PayPal",
          service: service,
          tier: tier,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          address: Yup.string().required("Required"),
          country: Yup.string().required("Required"),
          state: Yup.string().required("Required"),
          zip: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(createOrder(values));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder=""
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder=""
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
          />

          <MyTextInput
            label="Address"
            name="address"
            type="address"
            placeholder="1234 Main St"
          />

          <MySelect label="Country" name="country">
            <option value="">Choose...</option>
            <option value="united_states">United States</option>
          </MySelect>

          <MySelect label="State" name="state">
            <option value="">Choose...</option>
            <option value="united_states">California</option>
          </MySelect>

          <MyTextInput label="Zip" name="zip" type="text" placeholder="" />

          <MyButton />
        </Form>
      </Formik>
    </>
  );
};

export default CheckoutForm;
