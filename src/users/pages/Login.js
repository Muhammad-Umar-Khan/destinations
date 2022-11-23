import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import "./Login.css";
import { loginAction } from "../../store/actions/loginAction";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const login = useSelector((state) => state.loginReducer.login);
  console.log(login);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm({ values: "" });
          dispatch(loginAction());
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
            <>
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
              <Button type="submit">Login</Button>
              <div>
                <Link to={"/users/auth"}>
                  <span>New user?</span>
                </Link>
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
