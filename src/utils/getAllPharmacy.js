const getAllPharmacy = async () => {
  const res = await fetch("http://localhost:5000/pharmacyProducts");
  return res.json();
};

export default getAllPharmacy;
