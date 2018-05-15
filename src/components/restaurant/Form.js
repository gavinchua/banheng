import React, { Component } from "react";
import { Formik } from "formik";
import yup from "yup";
import Select from "react-select";
import Recaptcha from "react-recaptcha";

export default class RestaurantForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Adding Google API
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
  render() {
    const recaptchaKey = "6LdTNVgUAAAAALKYnLSdlxYnUyts0FZ9pQDyS62q";
    return (
      <div className="container">
        <Formik
          initialValues={{
            weddingCoupleName: "",
            weddingContactPerson: "",
            weddingEmail: "",
            weddingMobileNumber: "",
            weddingHomeNumber: "",
            weddingAddress: "",
            weddingPurpose: "Wedding",
            table: "",
            guest: "",
            weddingMessage: "",
            recaptcha: ""
          }}
          onSubmit={async values => {
            let formData = new FormData();

            formData.append("weddingCoupleName", values.weddingCoupleName);
            formData.append(
              "weddingContactPerson",
              values.weddingContactPerson
            );
            formData.append("weddingEmail", values.weddingEmail);
            formData.append("weddingMobileNumber", values.weddingMobileNumber);
            formData.append("weddingHomeNumber", values.weddingHomeNumber);
            formData.append("weddingAddress", values.weddingAddress);
            formData.append("weddingPurpose", values.weddingPurpose);
            formData.append("table", values.table);
            formData.append("guest", values.guest);
            formData.append("weddingMessage", values.weddingMessage);
            formData.append("recaptcha", values.recaptcha);

            // you would submit with fetch for example
            // const res = await fetch("posturl", { method: "POST", body: formData });
            // Do whatever on the sever
            alert("Form submitted!");
            //console.log(formData.get("weddingCoupleName"));
            console.log(formData);
          }}
          validationSchema={yup.object().shape({
            weddingCoupleName: yup
              .string()
              .required("Please check Name Of Couple."),
            weddingContactPerson: yup
              .string()
              .required("Please check Contact person."),
            weddingEmail: yup
              .string()
              .email("Email is not valid!")
              .required("Please check Email."),
            weddingMobileNumber: yup
              .string()
              .min(8, "Mobile No. must have min. of 8 digits")
              .required("Please check Mobile No.."),
            weddingHomeNumber: yup
              .string()
              .min(8, "Home No. must have min. of 8 digits"),
            weddingAddress: yup.string(),
            table: yup
              .number()
              .typeError("No. of table/s must be a number")
              .moreThan(0, "No. of table/s must be greater than zero")
              .required("Please check No. of Table/s required."),
            guest: yup
              .number()
              .typeError("No. of guest/s must be a number")
              .moreThan(0, "No. of guest/s must be greater than zero")
              .required("Please check No. of Guest/s required."),
            weddingMessage: yup.string(),
            recaptcha: yup.string().required("Please check Captcha.")
          })}
          render={({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue
          }) => (
            <form onSubmit={handleSubmit}>
              <p>This form is WIP. Its not going anywhere yet.</p>
              <p>
                Your reservations are subject to the restaurant seats
                availability, kindly wait for the restaurant email/call for
                confirmation.
              </p>
              <p>
                If you don't get any official reply from us within 24 working
                hours, please dial 6585 1770 / 6585 1093 to check if your
                reservation is successfully made.(Hotline available:
                10.30am-9.30pm, Tuesday to Sunday)
              </p>
              <p>亲爱的顾客:</p>
              <p>
                感谢您的网上预订。我们将会在24小时工作时间内通过电话或电邮回访确认您的预订成功。
              </p>
              <p>
                如果您在24小时工作时间内没有收到我们的回复，请于周二至周日，10.30am
                - 9.30pm之间拨打热线电话 6585 1770 / 6585 1093
                确认您的预订是否成功。
              </p>
              <p>
                <small>* Mandatory fields</small>
              </p>

              <div className="form-group">
                <label htmlFor="weddingCoupleName">
                  Name Of Couple
                  <small className="required">*</small>
                </label>
                <input
                  id="weddingCoupleName"
                  name="weddingCoupleName"
                  type="text"
                  className={`form-control ${errors.weddingCoupleName &&
                    touched.weddingCoupleName &&
                    "is-invalid"}`}
                  placeholder="Name Of Couple"
                  value={values.weddingCoupleName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.weddingCoupleName &&
                  touched.weddingCoupleName && (
                    <p className="invalid-feedback">
                      {errors.weddingCoupleName}
                    </p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="weddingContactPerson">
                  Contact person
                  <small className="required">*</small>
                </label>
                <input
                  id="weddingContactPerson"
                  name="weddingContactPerson"
                  type="text"
                  className={`form-control ${errors.weddingContactPerson &&
                    touched.weddingContactPerson &&
                    "is-invalid"}`}
                  placeholder="Contact person"
                  value={values.weddingContactPerson}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.weddingContactPerson &&
                  touched.weddingContactPerson && (
                    <p className="invalid-feedback">
                      {errors.weddingContactPerson}
                    </p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="weddingEmail">
                  E-mail
                  <small className="required">*</small>
                </label>
                <input
                  id="weddingEmail"
                  name="weddingEmail"
                  type="email"
                  className={`form-control ${errors.weddingEmail &&
                    touched.weddingEmail &&
                    "is-invalid"}`}
                  placeholder="Email"
                  value={values.weddingEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.weddingEmail &&
                  touched.weddingEmail && (
                    <p className="invalid-feedback">{errors.weddingEmail}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="weddingMobileNumber">
                  Mobile No.
                  <small className="required">*</small>
                </label>
                <input
                  id="weddingMobileNumber"
                  name="weddingMobileNumber"
                  type="tel"
                  className={`form-control ${errors.weddingMobileNumber &&
                    touched.weddingMobileNumber &&
                    "is-invalid"}`}
                  placeholder="Mobile No."
                  value={values.weddingMobileNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.weddingMobileNumber &&
                  touched.weddingMobileNumber && (
                    <p className="invalid-feedback">
                      {errors.weddingMobileNumber}
                    </p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="weddingHomeNumber">Home No.</label>
                <input
                  id="weddingHomeNumber"
                  name="weddingHomeNumber"
                  type="tel"
                  className={`form-control ${errors.weddingHomeNumber &&
                    touched.v &&
                    "is-invalid"}`}
                  placeholder="Home No."
                  value={values.weddingHomeNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.weddingHomeNumber &&
                  touched.weddingHomeNumber && (
                    <p className="invalid-feedback">
                      {errors.weddingHomeNumber}
                    </p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="weddingAddress">Address</label>
                <textarea
                  id="weddingAddress"
                  name="weddingAddress"
                  className={`form-control ${errors.weddingAddress &&
                    touched.weddingAddress &&
                    "is-invalid"}`}
                  placeholder="Address"
                  value={values.weddingAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.weddingAddress &&
                  touched.weddingAddress && (
                    <p className="invalid-feedback">{errors.weddingAddress}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="weddingPurpose">
                  Purpose
                  <small className="required">*</small>
                </label>
                <div className="form-check">
                  <div className="form-check form-check-inline">
                    <input
                      id="weddingPurposeWedding"
                      name="weddingPurpose"
                      type="radio"
                      className="form-check-input"
                      value={values.weddingPurpose}
                      checked={values.weddingPurpose === "Wedding"}
                      onChange={() => {
                        setFieldValue("weddingPurpose", "Wedding");
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="weddingPurposeWedding"
                    >
                      Wedding
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      id="weddingPurposeFunction"
                      name="weddingPurpose"
                      type="radio"
                      className="form-check-input"
                      value={values.weddingPurpose}
                      checked={values.weddingPurpose === "Function"}
                      onChange={() => {
                        setFieldValue("weddingPurpose", "Function");
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="weddingPurposeFunction"
                    >
                      Function
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="table">No. of Table/s</label>
                <input
                  id="table"
                  name="table"
                  type="number"
                  className={`form-control ${errors.table &&
                    touched.table &&
                    "is-invalid"}`}
                  placeholder="No. of Table/s"
                  value={values.table}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.table &&
                  touched.table && (
                    <p className="invalid-feedback">{errors.table}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="guest">No. of Guest/s</label>
                <input
                  id="guest"
                  name="guest"
                  type="number"
                  className={`form-control ${errors.guest &&
                    touched.guest &&
                    "is-invalid"}`}
                  placeholder="No. of Guest/s"
                  value={values.guest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.guest &&
                  touched.guest && (
                    <p className="invalid-feedback">{errors.guest}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="weddingMessage">Message</label>
                <textarea
                  id="weddingMessage"
                  name="weddingMessage"
                  className={`form-control ${errors.weddingMessage &&
                    touched.weddingMessage &&
                    "is-invalid"}`}
                  placeholder="Message"
                  value={values.weddingMessage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.weddingMessage &&
                  touched.weddingMessage && (
                    <p className="invalid-feedback">{errors.weddingMessage}</p>
                  )}
              </div>

              <div className="form-group">
                <label>Recaptcha Validation</label>
                <Recaptcha
                  sitekey={recaptchaKey}
                  render="explicit"
                  theme="dark"
                  verifyCallback={response => {
                    setFieldValue("recaptcha", response);
                  }}
                  onloadCallback={() => {
                    console.log("done loading!");
                  }}
                />
                {errors.recaptcha &&
                  touched.recaptcha && (
                    <p className="invalid-field">{errors.recaptcha}</p>
                  )}
              </div>

              <button type="submit" className="btn btn-primary">
                submit
              </button>

              <p className="text-center">
                <small>
                  All reservations are subjected to restaurant confirmation.
                </small>
              </p>
            </form>
          )}
        />
      </div>
    );
  }
}
