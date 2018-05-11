import React, { Component } from "react";
import { Formik } from "formik";
import yup from "yup";
import { Checkbox, Radio } from "react-icheck";
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
            name: "",
            mobile: "",
            email: "",
            table: "",
            guest: "",
            message: "",
            recaptcha: ""
          }}
          onSubmit={async values => {
            let formData = new FormData();

            formData.append("name", values.name);
            formData.append("mobile", values.mobile);
            formData.append("email", values.email);
            formData.append("table", values.table);
            formData.append("guest", values.guest);
            formData.append("message", values.message);
            formData.append("recaptcha", values.recaptcha);

            // you would submit with fetch for example
            // const res = await fetch("posturl", { method: "POST", body: formData });
            // Do whatever on the sever
            alert("Form submitted!");
            console.log(formData.get("name"));
            console.log(formData.get("mobile"));
            console.log(formData.get("email"));
            console.log(formData.get("table"));
            console.log(formData.get("guest"));
            console.log(formData.get("message"));
            console.log(formData.get("recaptcha"));
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required("Please check Name."),
            email: yup
              .string()
              .email("Email is not valid!")
              .required("Please check Email."),
            mobile: yup
              .string()
              .min(8, "Mobile must have min. of 8 digits")
              .required("Please check Mobile."),
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
            message: yup.string().required("Please check Message."),
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
                <small>All fields are maditory</small>
              </p>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`form-control ${errors.name &&
                    touched.name &&
                    "is-invalid"}`}
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name &&
                  touched.name && (
                    <p className="invalid-feedback">{errors.name}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  className={`form-control ${errors.mobile &&
                    touched.mobile &&
                    "is-invalid"}`}
                  placeholder="Mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.mobile &&
                  touched.mobile && (
                    <p className="invalid-feedback">{errors.mobile}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-control ${errors.email &&
                    touched.email &&
                    "is-invalid"}`}
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email &&
                  touched.email && (
                    <p className="invalid-feedback">{errors.email}</p>
                  )}
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
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-control ${errors.message &&
                    touched.message &&
                    "is-invalid"}`}
                  placeholder="Message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message &&
                  touched.message && (
                    <p className="invalid-feedback">{errors.message}</p>
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
