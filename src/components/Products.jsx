import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      const fetchData = async () => {
        await axios
          .get("https://65d8e42ec96fbb24c1bc76f0.mockapi.io/api/foods")
          .then((res) => setProducts(res.data))
          .catch((err) => {
            console.log(err);
          });
      };
    fetchData();
  }, [deleteData]);

  // const fetchData = async () => {
  //   await axios
  //     .get("https://65d8e42ec96fbb24c1bc76f0.mockapi.io/api/foods")
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://65d8e42ec96fbb24c1bc76f0.mockapi.io/api/foods/${id}`)

      .then((res) => setDeleteData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ margin: "60px" }}>

      <div class=" container d-grid gap-2 d-md-flex justify-content-md-end" style={{margin:"16px"}}>
        <button style={{width:"100px"}}
          class="btn btn-primary"
          onClick={() => {
            navigate("/FormikCreate");
          }} >
          Create
        </button>
      </div>

      <table class="table" style={{ border: "1px solid #ccc" }}>
        <thead>
          <tr>
            <th scope="col">Num</th>
            <th scope="col">FoodId</th>
            <th scope="col">FoodName</th>
            <th scope="col">FoodPrice</th>
            <th scope="col">FoodDescription</th>
            <th scope="col"> Edit </th>
            <th scope="col"> Delete </th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.food_id}</td>
                  <td>{item.food_name}</td>
                  <td>{item.food_price}</td>
                  <td>{item.food_description}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      
      </table>
    </div>
  );
};

export default Products;
//then((res) => setDeleteData(res.data))
