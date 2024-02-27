import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://65d8e42ec96fbb24c1bc76f0.mockapi.io/api/foods");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);



   
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="col">
                  <div className="card ">
                    <img
                      src={item.foor_image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.food_name}</h5>
                      <h5 className="card-title">{item.food_price}</h5>
                      <p className="card-text"> {item.food_description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};


export default Home;
