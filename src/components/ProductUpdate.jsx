// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ProductUpdate = ({ id }) => {
//   const navigate = useNavigate();
//   const [editData, setEditData] = useState({
//     food_id: "",
//     food_name: "",
//     food_price: "",
//    food_description: "",
//   });

//   useEffect(() => {
//       const fetchData = async () => {
//         await axios
//           .get(`https://65d8e42ec96fbb24c1bc76f0.mockapi.io/api/foods/${id}`)
//           .then((res) => setEditData(res.data))
//           .catch((err) => console.log(err));
//       };
//     fetchData();
//   }, []);


//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setEditData((preData) => ({
//       ...preData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     await axios
//       .put(
//         `https://65d8e42ec96fbb24c1bc76f0.mockapi.io/api/foods/${id}`,
//         editData
//       )
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
//                     type="text"
//                     name="food_id"
//                     value={editData.food_id}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <label for="food_name"> FoodName:</label>
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     name="food_name"
//                     value={editData.food_name}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <label for="food_price"> food price:</label>
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     name="food_price"
//                     value={editData.food_price}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <label for="food_description"> Food description:</label>
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     name="food_description"
//                     value={editData.food_description}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
//             <button type="submit" class="btn btn-primary ">
//             Update
//             </button>
//           </div>

//           {/* <button type="submit">Update</button> */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductUpdate;
