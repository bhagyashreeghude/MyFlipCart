
import MainComponent from "./MainComponent"
import Services from "./Services"
import Trusted from "./Trusted"

const Home = ({myData}) => {
  const data={
    name:"Shree E-Commerce"
  }
  return (
    <div>
      <MainComponent myData={data}/>
      <Services/>
      <Trusted/>
      <parent />
      
    </div>
  )
}

export default Home