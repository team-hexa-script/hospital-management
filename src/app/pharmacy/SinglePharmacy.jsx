import React from "react";

const SinglePharmacy = ({ pharmacy }) => {
  const { name, image, purpose, price } = pharmacy;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-40 transition-transform transform hover:scale-105 cursor-pointer"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{purpose}</p>
        <small className="text-red-500 font-bold">Price: $ {price}</small>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-info">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePharmacy;
