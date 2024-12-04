import React, { useEffect, useState } from "react";

import { useLoaderData, useNavigate } from "react-router-dom";

function Products() {
  let data = useLoaderData();
  let navigate = useNavigate();

  return (
    <div style={{ cursor: "pointer" }}>
      {data?.map((product) => {
        return (
          <div
            onClick={(e) => {
              e.stopPropagation();
              navigate(product["id"].toString());
            }}
            key={product["id"]}
            style={{
              backgroundColor: "wheat",
              margin: "10px",
              borderRadius: "20px",
              padding: "30px",
              width: "40vw",
            }}
          >
            <img
              src={product["image"]}
              alt="img"
              height="200px"
              width="100%"
              style={{ objectFit: "contain" }}
            />
            <p
              style={{ fontSize: "22px", padding: "10px", fontWeight: "bold" }}
            >
              {product["title"]}{" "}
            </p>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Price : {product["price"]}/-
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "600",
                margin: "10px 10px",
              }}
            >
              {product["description"]}/-
            </p>

            <p
              style={{ fontSize: "22px", fontWeight: "bold", color: "orange" }}
            >
              Rating : {product["rating"]["rate"]}
            </p>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Count : {product["rating"]["count"]}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(product["id"].toString());
              }}
              style={{
                padding: "10px 20px",
                outline: "none",
                border: "none",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              More Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;

export const productsLoader = async (setData) => {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();

  return data;
};
