import * as Yup from "yup";
import { Formik, Form } from "formik";
// import { Formik } from "formik";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
import Button from "../../shared/components/FormElements/Button";

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  address: Yup.string().required(),
});

const NewPlace = () => {
  const initialValues = {
    title: "",
    description: "",
    address: "",
  };

  return (
    <div className="place-form">
      <h1>New Place</h1>
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
                label="Title"
                onchange={handleChange("title")}
                onblur={() => setFieldTouched("title")}
                value={values.title}
              />
              {errors.title && touched.title ? <p>{errors.title}</p> : ""}
              <Input
                type="text"
                label="Description"
                element="textarea"
                onchange={handleChange("description")}
                onblur={() => setFieldTouched("description")}
                value={values.description}
              />
              {errors.description && touched.description ? (
                <p>{errors.description}</p>
              ) : (
                ""
              )}
              <Input
                type="text"
                label="Address"
                element="input"
                onchange={handleChange("address")}
                onblur={() => setFieldTouched("address")}
                value={values.address}
              />
              {errors.address && touched.address ? <p>{errors.address}</p> : ""}
              <Button type="Submit" onClick={handleSubmit}>
                ADD PLACE
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default NewPlace;
