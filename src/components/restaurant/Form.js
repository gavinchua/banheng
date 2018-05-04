import React, { Component } from "react";
import { Formik } from "formik";
import yup from "yup";
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
  // <div className="form-group">
  //   <label>Recaptcha Validation</label>
  //   <Recaptcha
  //     sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
  //     render="explicit"
  //     theme="dark"
  //     verifyCallback={response => {
  //       setFieldValue("recaptcha", response);
  //     }}
  //     onloadCallback={() => {
  //       console.log("done loading!");
  //     }}
  //   />
  //   {errors.recaptcha &&
  //     touched.recaptcha && <p>{errors.recaptcha}</p>}
  // </div>
  render() {
    return (
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: ""
            //recaptcha: ""
          }}
          onSubmit={async values => {
            let formData = new FormData();

            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("phone", values.phone);
            //formData.append("recaptcha", values.recaptcha);

            // you would submit with fetch for example
            // const res = await fetch("posturl", { method: "POST", body: formData });
            // Do whatever on the sever
            alert("Form submitted!");
            console.log(formData.get("name"));
            console.log(formData.get("email"));
            console.log(formData.get("phone"));
            //console.log(formData.get("recaptcha"));
          }}
          validationSchema={yup.object().shape({
            name: yup
              .string()
              .required("Name is required!"),
            email: yup
              .string()
              .email("Email is not valid!")
              .required("Email is required!"),
            phone: yup
              .number()
              .typeError("phone must be a number")
              .integer()
              .min(11111111 | 8, "Phone must have min. of 8 digits")
              .required("phone is required")
            // age: yup.number()
            //   .typeError('age must be a number')
            //   .positive('age must be greater than zero')
            //   .required('age is required')
            //recaptcha: yup.string().required()
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
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && <p>{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <p>{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-control"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone && <p>{errors.phone}</p>}
              </div>

              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}
