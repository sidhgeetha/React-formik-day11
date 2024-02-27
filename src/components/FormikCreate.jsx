import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from "formik";

const FormikCreate = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    food_id: '',
    food_name: '',
    food_price: '',
    food_description: '',
  });

  const validationSchema = Yup.object().shape({
    food_id:Yup.string().required('food id is required'),
     food_name:Yup.string().required('food name is required'),
      food_price:Yup.string().required('food price is required'),
       food_description:Yup.string().required('food description is required'),
  })

  const formik = useFormik({
    initialValues: {
      food_id: "",
      food_name: "",
      food_price: "",
      food_description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await axios
        .post(`https://65d8e42ec96fbb24c1bc76f0.mockapi.io/api/foods`, values)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

      navigate("/products");
    }
  })

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setCreateData((preData) => ({
  //     ...preData,
  //     [name]: value,
  //   }));
  // };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .post(`https://65d8e42ec96fbb24c1bc76f0.mockapi.io/api/foods`, createData)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));

  //   navigate("/products");
  // };

  return (
    <div class="container d-flex justify-content-center ">
      <div
        class="col-md-8 "
        style={{
          padding: "20px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <table class="table">
            <tbody>
              <tr>
                <td>
                  <label for="food_id">foodId:</label>
                </td>
                <div className="text-danger">{formik.errors.food_id}</div>
                <td>
                  <input
                    class="form-control"
                    type="text"
                    id="food_id"
                    name="food_id"
                    value={formik.values.food_id}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>FoodName:</td>
                <div className="text-danger">{formik.errors.food_name}</div>
                <td>
                  <input
                    class="form-control"
                    type="text"
                    name="food_name"
                    value={formik.values.food_name}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>FoodPrice:</td>
                <div className="text-danger">{formik.errors.food_price}</div>
                <td>
                  <input
                    class="form-control"
                    type="text"
                    name="food_price"
                    value={formik.values.food_price}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Food Description:</td>
                <div className="text-danger">{formik.errors.food_description}
                </div>
                <td>
                  <input
                    class="form-control"
                    type="text"
                    name="food_description"
                    value={formik.values.food_description}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-primary ">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormikCreate;
