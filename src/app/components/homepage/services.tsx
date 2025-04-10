import Container from "../container";
import List from "../list";
const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-12 bg-zinc-800/30">
      <Container>
        <h3 className="font-extrabold text-2xl">all services</h3>
      </Container>
      <div className="bg-gray-500 w-1 h-12 mt-4 mb-4 justify-center items-center"></div>
      <Container>
        <div>
          <h2 className="font-extrabold text-3xl text-center">
            this is how we can help you.
          </h2>
          <List
            text1="lorem ipsum dolor"
            text2="lorem ipsum dolor"
            text3="lorem ipsum dolor"
            text4="lorem ipsum dolor"
            text5="lorem ipsum dolor"
          />
          <List
            text1="lorem ipsum dolor"
            text2="lorem ipsum dolor"
            text3="lorem ipsum dolor"
            text4="lorem ipsum dolor"
            text5="lorem ipsum dolor"
          />
          <List
            text1="lorem ipsum dolor"
            text2="lorem ipsum dolor"
            text3="lorem ipsum dolor"
            text4="lorem ipsum dolor"
            text5="lorem ipsum dolor"
          />
        </div>
      </Container>
    </div>
  );
};

export default Services;
