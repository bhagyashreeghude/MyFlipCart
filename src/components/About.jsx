import MainComponent from "./MainComponent"

const About = ({props}) => {
  const data = {
    name:"Shree Store"
  }
  console.log(props)
  console.log(data)
  console.log(data.name)
  return (
    <div >
      <MainComponent props={data?.name}/>
      
      </div>
    
  )
}

export default About