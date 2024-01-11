import errorImg from "../../assets/404.gif";

const Error = () => {
  return (
    <div className="text-center mt-36">
      <img className="w-60 mx-auto mb-8" src={errorImg} alt="" />
      <h2 className="text-4xl text-rose-500">Opps! Page Not Found</h2>
    </div>
  );
};

export default Error;
