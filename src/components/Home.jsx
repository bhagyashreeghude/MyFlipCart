import Footer from "./Footer"
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
      <Footer/>
    </div>
  )
}

export default Home