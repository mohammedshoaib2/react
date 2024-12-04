import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

function ProductDetails() {
  let { id } = useParams();
  let [data, setData] = useState({});
  let bgColor = randomColor();
  useEffect(() => {
    let productData = getProductDataById(id);

    productData.then((response) => {
      setData(response);
    });
  }, []);
  return (
    <>
      {Object.keys(data).length > 0 ? (
        data["status"] == true ? (
          <div
            style={{
              borderRadius: "30px",
              margin: "50px",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "50vw",
              backgroundColor: bgColor ?? "red",
            }}
          >
            <img src={data["image"]} alt="image" height="200px" width="200px" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              title : {data["title"]}
            </p>
            <p style={{ fontSize: "20px" }}>
              description : {data["description"]}
            </p>
            <p style={{ fontSize: "20px" }}>category : {data["category"]}</p>
            <p style={{ fontSize: "20px" }}>price : {data["price"]}</p>
            <p style={{ fontSize: "20px" }}>
              rating : {data["rating"]["rate"]}
            </p>
            <p style={{ fontSize: "20px" }}>
              count : {data["rating"]["count"]}
            </p>
          </div>
        ) : (
          <p>No data found</p>
        )
      ) : (
        <p>Loading Data</p>
      )}
    </>
  );
}

export default ProductDetails;

const getProductDataById = async (id) => {
  try {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await response.json();
    data.status = true;

    return data;
  } catch (e) {
    return {
      status: false,
    };
  }
};

const randomColor = () => {
  let colorString = "ABCDEF0123456789";
  let color = "#";
  for (let index = 0; index < 8; index++) {
    color = color + colorString[Math.round(Math.random() * 15)];
  }
  if (color === "#000000" || color === "#ffffff") {
    return "#487497";
  }
  return color;
};
