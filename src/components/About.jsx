import MainComponent from "./MainComponent"

const About = ({myData}) => {
  const data = {
    name:"Shree Store"
  }
  return (
    <div >
      <MainComponent myData={data}/>
      </div>
    
  )
}

export default About