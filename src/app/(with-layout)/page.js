import banner from "@/assets/demo.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      Home
      <Image width={1440} src={banner}></Image>
    </main>
  );
};

export default HomePage;
