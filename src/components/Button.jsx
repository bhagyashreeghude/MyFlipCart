const Button = ({myBtn}) => {
  const {btnName} =myBtn
 

  return (
    <div>
      <button className="bg-blue-600 hover:bg-blue-400 m-2 p-2 border border-black text-white  ">{btnName} </button>
    </div>
  );
};

export default Button;
