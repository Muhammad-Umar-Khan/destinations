import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import "./Register.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  return (
    <div className="register-form">
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm({ values: "" });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          setFieldTouched,
          values,
          errors,
        }) => {
          return (
            <Form>
              <Input
                type="text"
                element="input"
                label="First Name"
                onchange={handleChange("firstName")}
                onblur={() => setFieldTouched("firstName")}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName ? (
                <p>{errors.firstName}</p>
              ) : (
                ""
              )}
              <Input
                type="text"
                element="input"
                label="Last Name"
                onchange={handleChange("lastName")}
                onblur={() => setFieldTouched("lastName")}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName ? (
                <p>{errors.lastName}</p>
              ) : (
                ""
              )}
              <Input
                type="email"
                element="input"
                label="Email"
                onchange={handleChange("email")}
                onblur={() => setFieldTouched("email")}
                value={values.email}
              />
              {errors.email && touched.email ? <p>{errors.email}</p> : ""}
              <Input
                type="password"
                element="input"
                label="Password"
                onchange={handleChange("password")}
                onblur={() => setFieldTouched("password")}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : (
                ""
              )}
              <Button type="Submit">Register</Button>
              <div>
                <Link to={"/users/login"}>
                  <span>Already have an account?</span>
                </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
