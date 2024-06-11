import Button from "./Button";
import { ERROR_PAGE_IMG } from "./utils/constants";

const ErrorPage = ({ myBtn }) => {
  const btn = {
    btnName: "Go Back Home",
  };
  console.log(btn.btnName);

  return (
    <>
      <div className="h-[700px]">
        <div className="grid grid-cols-6 w-full  pl-20">
          <div className="p-12 col-start-1 col-span-2">
            <h2 className="text-6xl">404</h2>
            <h2 className="text-4xl p-2">UH OH! You are lost.</h2>
            <p className="text-2xl p-2">this page is not working</p>
          </div>
          <div className="col-start-3 col-span-3">
            <img src={ERROR_PAGE_IMG} className="w-[900px] h-[500px] p-4" />
          </div>
        </div>
        <div className="text-center">
          <Button myBtn={btn} />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
