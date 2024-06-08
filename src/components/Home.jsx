import MainComponent from "./MainComponent"


const Home = ({myData}) => {
  const data={
    name:"Shree E-Commerce"
  }
  return (
    <div>
      <MainComponent myData={data}/>
    </div>
  )
}

export default Home