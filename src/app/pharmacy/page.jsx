"use client";
import React, { useEffect, useState } from "react";
import getAllPharmacy from "@/utils/getAllPharmacy";
import SinglePharmacy from "./SinglePharmacy";

const PharmacyPage = () => {
  const [allPharmacy, setAllPharmacy] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getAllPharmacy();
        setAllPharmacy(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const visiblePharmacy = showAllCards ? allPharmacy : allPharmacy.slice(0, 6);

  return (
    <div className="mt-32">
      <h2 className="text-center font-bold text-2xl text-red-500 mb-5">
        Our Pharmacy
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {visiblePharmacy.map((pharmacy) => (
          <SinglePharmacy
            pharmacy={pharmacy}
            key={pharmacy.id}
          ></SinglePharmacy>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="btn btn-warning"
          onClick={() => setShowAllCards(!showAllCards)}
        >
          {showAllCards ? "Show Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default PharmacyPage;
