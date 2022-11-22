import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import React from "react";
import "./UpdatePlace.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

const places = [
  {
    id: "u1",
    title: "Empire state building",
    description: "A famous skyscraper",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "u2",
    title: "Canada Flag waving over lake Ontario",
    description:
      "Lake Ontario is one of the five Great Lakes of North America. It is surrounded on the north, west, and southwest by the Canadian province of Ontario",
    imageUrl:
      "https://media.istockphoto.com/id/1178852373/photo/canadian-flag-flying-over-old-quebec-city.jpg?s=612x612&w=0&k=20&c=0dsOXraklB5DCLYeYVpmDxfgquLlVSalCcHacs0LgTY=",
    address: "Vancouver, BC V6T 1Z4, Canada",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  address: Yup.string().required(),
});

const UpdatePlace = () => {
  const pid = useParams().pid;
  const placeToBeUpdated = places.find((place) => place.id === pid); //array destructuring;

  return (
    <div className="update-place">
      <h1>Update Place</h1>
      <Formik
        initialValues={{
          title: placeToBeUpdated.title,
          description: placeToBeUpdated.description,
          address: placeToBeUpdated.address,
        }}
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
                element="textarea"
                label="Description"
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
                element="input"
                label="Address"
                onchange={handleChange("address")}
                onblur={() => setFieldTouched("address")}
                value={values.address}
              />
              {errors.address && touched.address ? <p>{errors.address}</p> : ""}
              <Button type="submit">UPDATE PLACE</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdatePlace;
