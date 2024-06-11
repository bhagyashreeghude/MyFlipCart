
import MainComponent from "./MainComponent";
import { useProductContext } from "./context/productContext";

const About = () => {
  const myName = useProductContext();
  const data = {
    name: "Shree Store",
  };

  console.log(data);
  console.log(data.name);
  return (
    <>
      {myName}
      <MainComponent myData={data} />
    </>
  );
};

export default About;
