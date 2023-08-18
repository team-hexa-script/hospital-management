import React from "react";

import Choice from "./choice";
import Banner from "./Banner";
import Doctors from "./Doctors";
const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <Choice></Choice>
      <Doctors/>       
    </main>
  );
};

export default HomePage;
