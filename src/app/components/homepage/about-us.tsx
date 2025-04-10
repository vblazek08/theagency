import Aboutus from "./about-component/aboutus";

const aboutus = () => {
  return (
    <div className="mt-12 flex flex-col">
      <div className="bg-green-500 w-1/6 h-1"></div>
      <div>
        <h2 className="font-extrabold text-4xl">about us.</h2>
      </div>
      <Aboutus />
    </div>
  );
};

export default aboutus;
