import banner from "@/assets/demo.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <Image width={1440} src={banner}></Image>
      <h2>HomePage</h2>
      <p>Hospital management</p>
      <p>aboy us</p>
    </main>
  );
};

export default HomePage;
