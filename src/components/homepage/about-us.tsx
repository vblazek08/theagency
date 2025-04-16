import Container from "../container";
import Aboutus from "./about-component/aboutus";

const aboutus = () => {
  return (
    <div className="mt-12 flex flex-col bg-zinc-800/30">
      <Container>
        <div className="bg-green-500 w-1/6 h-1"></div>
        <div>
          <h2 className="font-extrabold text-4xl">about us.</h2>
        </div>
        <Aboutus />
      </Container>
    </div>
  );
};

export default aboutus;
