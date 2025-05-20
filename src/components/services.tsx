import Container from "./container";
import List from "./list";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-12 ">
      <Container>
        <h3 className="font-extrabold text-2xl">all services</h3>
      </Container>
      <div className="bg-zinc-500 w-1 h-12 mt-4 mb-4 justify-center items-center"></div>
      <Container>
        <h2 className="font-extrabold text-3xl text-center">
          this is how we can help you.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-24 mt-8">
          <List
            array={[
              "lorem ipsum dolor",
              "lorem ipsum dolor",
              "lorem ipsum dolor",
              "lorem ipsum dolor",
              "lorem ipsum dolor",
            ]}
          />
          <List
            array={[
              "lorem ipsum dolor",
              "lorem ipsum dolor",
              "lorem ipsum dolor",
              "lorem ipsum dolor",
              "lorem ipsum dolor",
            ]}
          />

          <List
            array={[
              "lorem ipsum dolor",
              "lorem ipsum dolor",
              "lorem ipsum dolor",
              "lorem ipsum dolor",
              "lorem ipsum dolor",
            ]}
          />
        </div>
      </Container>
    </div>
  );
};

export default Services;
