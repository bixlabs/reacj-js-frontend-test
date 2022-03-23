import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "./checkoutActions";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { service, tier } = useParams();
  const formik = useFormik({
    initialValues: {
      customer: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        country: "",
        state: "",
        zip: "",
      },
      payment: {
        provider: "PayPal",
        nameOnCard: "",
        creditCardNumber: "",
        expiration: "",
        ccvNumber: "",
      },
      purchase: {
        service,
        tier,
      },
    },
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
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
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
                    id="customer.firstName"
                    name="customer.firstName"
                    placeholder=""
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.customer.firstName}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="customer.lastName"
                    name="customer.lastName"
                    placeholder=""
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.customer.lastName}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="customer.email"
                  placeholder="you@example.com"
                  name="customer.email"
                  required=""
                  onChange={formik.handleChange}
                  value={formik.values.customer.email}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="customer.address"
                  name="customer.address"
                  placeholder="1234 Main St"
                  required=""
                  onChange={formik.handleChange}
                  value={formik.values.customer.address}
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="custom-select d-block w-100"
                    id="customer.country"
                    name="customer.country"
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.customer.country}
                  >
                    <option value="">Choose...</option>
                    <option>Argentina</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    name="customer.state"
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.customer.state}
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="customer.zip"
                    placeholder=""
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.customer.zip}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                />
                <label className="custom-control-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" htmlFor="save-info">
                  Save this information for next time
                </label>
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
                    required=""
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="nameOnCard">Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameOnCard"
                    name="payment.nameOnCard"
                    placeholder=""
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.payment.nameOnCard}
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="payment.creditCardNumber">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="payment.creditCardNumber"
                    name="payment.creditCardNumber"
                    placeholder=""
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.payment.creditCardNumber}
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="payment.expiration">Expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="payment.expiration"
                    name="payment.expiration"
                    placeholder=""
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.payment.expiration}
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="payment.ccvNumber">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="payment.ccvNumber"
                    name="payment.ccvNumber"
                    placeholder=""
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.payment.ccvNumber}
                  />
                  <div className="invalid-feedback">Security code required</div>
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
