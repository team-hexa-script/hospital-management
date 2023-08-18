import React from "react";

const getAllCategories = async () => {
  const res = await fetch("http://localhost:5000/categories");
  return res.json();
};

export default getAllCategories;
