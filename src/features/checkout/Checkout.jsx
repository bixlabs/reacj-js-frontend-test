import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "./checkoutActions";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import Cart from "./cart/Cart";
import * as Yup from "yup";

const Checkout = () => {
  const { service, tier } = useParams();
  const servicesList = useSelector((state) => state.services.services);
  const currentService = servicesList.find((serv) => serv.code === service);
  const currentTier = currentService.tiers.find((t) => t.name === tier);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      country: "",
      state: "",
      zip: "",
      paymentProvider: "PayPal",
      service,
      tier,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      address: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      zip: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(createOrder(values));
    },
  });

  const data = useSelector((state) => state.checkout.order);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h2>Checkout form</h2>
          <p className="lead">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>

        <div className="row">
          <Cart
            tierName={currentTier.name}
            serviceName={currentService.serviceName}
            price={currentTier.price}
          />
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form
              className="needs-validation"
              noValidate=""
              onSubmit={formik.handleSubmit}
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p class="text-danger">Valid first name is required.</p>
                  ) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p class="text-danger">Valid last name is required.</p>
                  ) : null}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  name="email"
                  required=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p class="text-danger">
                    Please enter a valid email address for shipping updates.
                  </p>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="1234 Main St"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                  <p class="text-danger">Please enter your shipping address.</p>
                ) : null}
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    name="country"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                  >
                    <option value="">Choose...</option>
                    <option>Argentina</option>
                    <option>United States</option>
                  </select>
                  {formik.touched.country && formik.errors.country ? (
                    <p className="text-danger">
                      Please select a valid country.
                    </p>
                  ) : null}
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    name="state"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  {formik.touched.state && formik.errors.state ? (
                    <p className="text-danger">Please provide a valid state.</p>
                  ) : null}
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    onChange={formik.handleChange}
                    value={formik.values.zip}
                  />
                  {formik.touched.zip && formik.errors.zip ? (
                    <p className="text-danger">Zip code required.</p>
                  ) : null}
                </div>
              </div>
              <hr className="mb-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    disabled
                    selected
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue to checkout
              </button>
            </form>

            <footer className="my-5 pt-5 text-muted text-center text-small">
              <p className="mb-1">© 2017-2020 Company Name</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">Privacy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Support</a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Checkout;
