import child from "./child"

const parent = () => {
  return (
    <div>parent
      <child name="ram"/>
      <child name="shyam"/>
    </div>
  )
}

export default parent