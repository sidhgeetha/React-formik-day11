// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ProductCreate = () => {
//   const navigate = useNavigate();
//   const [createData, setCreateData] = useState({
//     food_id: "",
//     food_name: "",
//     food_price: "",
//     food_description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setCreateData((preData) => ({
//       ...preData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     await axios
//       .post(`https://65d8e42ec96fbb24c1bc76f0.mockapi.io/api/foods`, createData)
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));

//     navigate("/products");
//   };

//   return (
//     <div class="container d-flex justify-content-center ">
//       <div
//         class="col-md-8 "
//         style={{
//           padding: "20px",
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
//         }}
//       >
//         <form onSubmit={handleFormSubmit}>
         
//           <table class="table">
//             <tbody>
//               <tr>
//                 <td>
//                   <label for="food_id">foodId:</label>
//                 </td>
//                 <td>
//                   <input
//                     class="form-control"
//                     type="text"
//                     id="food_id"
//                     name="food_id"
//                     value={createData.food_id}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>FoodName:</td>
//                 <td>
//                   <input
//                     class="form-control"
//                     type="text"
//                     name="food_name"
//                     value={createData.food_name}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>FoodPrice:</td>
//                 <td>
//                   <input
//                     class="form-control"
//                     type="text"
//                     name="food_price"
//                     value={createData.food_price}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Food Description:</td>
//                 <td>
//                   <input
//                     class="form-control"
//                     type="text"
//                     name="food_description"
//                     value={createData.food_description}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
//             <button type="submit" class="btn btn-primary ">
//               Create
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductCreate;
