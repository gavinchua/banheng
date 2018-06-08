import React, { Component } from "react";
import { Formik } from "formik";
import yup from "yup";

import Select from "react-select";
import "react-select/dist/react-select.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import "react-day-picker/lib/style.css";
import Recaptcha from "react-recaptcha";

export default class FormTable extends Component {
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
      <React.Fragment>
        <Formik
          initialValues={{
            tableName: "",
            tableEmail: "",
            tableMobileNumber: "",
            tableAddress: "",
            tablePurpose: "Buffet",
            tableRestaurant: "HarbourFront Centre",
            tableDate: new Date(),
            tableTable: "",
            tableGuests: "",
            tableMessage: "",
            recaptcha: ""
          }}
          onSubmit={async values => {
            let formData = new FormData();

            formData.append("tableName", values.tableName);
            formData.append("tableEmail", values.tableEmail);
            formData.append("tableMobileNumber", values.tableMobileNumber);
            formData.append("tableAddress", values.tableAddress);
            formData.append("tablePurpose", values.tablePurpose);
            formData.append("tableRestaurant", values.tableRestaurant);
            formData.append("tableDate", values.tableDate);
            formData.append("tableTable", values.tableTable);
            formData.append("tableGuests", values.tableGuests);
            formData.append("tableMessage", values.tableMessage);
            formData.append("recaptcha", values.recaptcha);

            // you would submit with fetch for example
            // const res = await fetch("posturl", { method: "POST", body: formData });
            // Do whatever on the sever
            alert("Form submitted!");
            console.log(formData.get("tableName"));
            console.log(formData.get("tableEmail"));
            console.log(formData.get("tableMobileNumber"));
            console.log(formData.get("tableAddress"));
            console.log(formData.get("tablePurpose"));
            console.log(formData.get("tableRestaurant"));
            console.log(formData.get("tableDate"));
            console.log(formData.get("tableTable"));
            console.log(formData.get("tableGuests"));
            console.log(formData.get("tableMessage"));
            console.log(formData.get("recaptcha"));
          }}
          validationSchema={yup.object().shape({
            tableName: yup
              .string()
              .required("Please check Name."),
            tableEmail: yup
              .string()
              .email("Email is not valid!")
              .required("Please check Email."),
            tableMobileNumber: yup
              .string()
              .min(8, "Mobile No. must have min. of 8 digits")
              .required("Please check Mobile No.."),
            tableAddress: yup.string(),
            tablePurpose: yup.string(),
            tableRestaurant: yup.string(),
            tableDate: yup.date(),
            tableTable: yup
              .number()
              .typeError("No. of table/s must be a number")
              .moreThan(0, "No. of table/s must be greater than zero")
              .required("Please check No. of Table/s required."),
            tableGuests: yup
              .number()
              .typeError("No. of guest/s must be a number")
              .moreThan(0, "No. of guest/s must be greater than zero")
              .required("Please check No. of Guest/s required."),
            tableMessage: yup.string(),
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
            <form method="post" onSubmit={handleSubmit}>
              <p>
                This form is WIP. Its not going anywhere yet. formData is
                generated.
              </p>
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
                <label htmlFor="tableName">
                  Name
                  <small className="required">*</small>
                </label>
                <input
                  id="tableName"
                  name="tableName"
                  type="text"
                  className={`form-control ${errors.tableName &&
                    touched.tableName &&
                    "is-invalid"}`}
                  placeholder="Name"
                  value={values.tableName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tableName &&
                  touched.tableName && (
                    <p className="invalid-feedback">
                      {errors.tableName}
                    </p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="tableEmail">
                  E-mail
                  <small className="required">*</small>
                </label>
                <input
                  id="tableEmail"
                  name="tableEmail"
                  type="email"
                  className={`form-control ${errors.tableEmail &&
                    touched.tableEmail &&
                    "is-invalid"}`}
                  placeholder="Email"
                  value={values.tableEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tableEmail &&
                  touched.tableEmail && (
                    <p className="invalid-feedback">{errors.tableEmail}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="tableMobileNumber">
                  Mobile No.
                  <small className="required">*</small>
                </label>
                <input
                  id="tableMobileNumber"
                  name="tableMobileNumber"
                  type="tel"
                  className={`form-control ${errors.tableMobileNumber &&
                    touched.tableMobileNumber &&
                    "is-invalid"}`}
                  placeholder="Mobile No."
                  value={values.tableMobileNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tableMobileNumber &&
                  touched.tableMobileNumber && (
                    <p className="invalid-feedback">
                      {errors.tableMobileNumber}
                    </p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="tableAddress">Address</label>
                <textarea
                  id="tableAddress"
                  name="tableAddress"
                  className={`form-control ${errors.tableAddress &&
                    touched.tableAddress &&
                    "is-invalid"}`}
                  placeholder="Address"
                  value={values.tableAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tableAddress &&
                  touched.tableAddress && (
                    <p className="invalid-feedback">{errors.tableAddress}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="tablePurpose">
                  Purpose
                  <small className="required">*</small>
                </label>
                <div className="form-check">
                  <div className="form-check form-check-inline">
                    <input
                      id="tablePurposeBuffet"
                      name="tablePurpose"
                      type="radio"
                      className="form-check-input"
                      value={values.tablePurpose}
                      checked={values.tablePurpose === "Buffet"}
                      onChange={() => {
                        setFieldValue("tablePurpose", "Buffet");
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="tablePurposeBuffet"
                    >
                      Buffet
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      id="tablePurposeAlaCarte"
                      name="tablePurpose"
                      type="radio"
                      className="form-check-input"
                      value={values.tablePurpose}
                      checked={values.tablePurpose === "AlaCarte"}
                      onChange={() => {
                        setFieldValue("tablePurpose", "AlaCarte");
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="tablePurposeAlaCarte"
                    >
                      Function
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="table">
                  Restaurant
                  <small className="required">*</small>
                </label>
                <Select
                  id="tableRestaurant"
                  name="tableRestaurant"
                  value={values.tableRestaurant}
                  clearable={false}
                  onChange={response => {
                    setFieldValue("tableRestaurant", response.value);
                  }}
                  options={[
                    {
                      value: "HarbourFront Centre",
                      label: "HarbourFront Centre"
                    },
                    {
                      value: "Aranda Country Club",
                      label: "Aranda Country Club"
                    },
                    {
                      value: "The Cathay",
                      label: "The Cathay"
                    },
                    {
                      value: "Orchard Central",
                      label: "Orchard Central"
                    },
                    {
                      value: "Boon Keng",
                      label: "Boon Keng"
                    }
                  ]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="tableDate">
                  Date
                  <small className="required">*</small>
                </label>
                <DayPickerInput
                  const
                  inputClassName={`form-control ${errors.tableDate &&
                    touched.tableDate &&
                    "is-invalid"}`}
                  id="tableDate"
                  name="tableDate"
                  inputProps={{
                    className: "form-control"
                  }}
                  type="text"
                  placeholder="Date(DD/MM/YYYY)"
                  value={values.tableDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  format="DD/MM/YYYY"
                  formatDate={formatDate}
                  parseDate={parseDate}
                  dayPickerProps={{
                    disabledDays: { before: new Date() }
                  }}
                />
                {errors.tableDate &&
                  touched.tableDate && (
                    <p className="invalid-feedback">{errors.tableDate}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="table">
                  No. of Table/s
                  <small className="required">*</small>
                </label>
                <input
                  id="tableTable"
                  name="tableTable"
                  type="text"
                  className={`form-control ${errors.tableTable &&
                    touched.tableTable &&
                    "is-invalid"}`}
                  placeholder="No. of Table/s"
                  value={values.tableTable}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tableTable &&
                  touched.tableTable && (
                    <p className="invalid-feedback">{errors.tableTable}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="tableGuests">
                  No. of Guest/s
                  <small className="required">*</small>
                </label>
                <input
                  id="tableGuests"
                  name="tableGuests"
                  type="text"
                  className={`form-control ${errors.tableGuests &&
                    touched.tableGuests &&
                    "is-invalid"}`}
                  placeholder="No. of Guest/s"
                  value={values.tableGuests}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tableGuests &&
                  touched.tableGuests && (
                    <p className="invalid-feedback">{errors.tableGuests}</p>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="tableMessage">Message</label>
                <textarea
                  id="tableMessage"
                  name="tableMessage"
                  className={`form-control ${errors.tableMessage &&
                    touched.tableMessage &&
                    "is-invalid"}`}
                  placeholder="Message"
                  value={values.tableMessage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tableMessage &&
                  touched.tableMessage && (
                    <p className="invalid-feedback">{errors.tableMessage}</p>
                  )}
              </div>

              <div className="form-group">
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
                Submit
              </button>

              <p className="text-center">
                <small>
                  All reservations are subjected to restaurant confirmation.
                </small>
              </p>
            </form>
          )}
        />
      </React.Fragment>
    );
  }
}
