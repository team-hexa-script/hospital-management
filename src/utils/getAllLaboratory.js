const getAllLaboratory = async () => {
  const res = await fetch("http://localhost:5000/hospitalLaboratories");
  return res.json();
};

export default getAllLaboratory;
