import Container from "./container";

const footer = () => {
  return (
    <Container>
      <div className="bg-white text-black flex flex-col  justify-center pt-12 mt-12 pb-24">
        <h2 className="font-bold text-3xsxl mb-8">The Agency</h2>
        <ul>
          <li>
            <a href="">home.</a>
          </li>
          <li>
            <a href="">about.</a>
          </li>
          <li>
            <a href="">services.</a>
          </li>
          <li>
            <a href="">projects.</a>
          </li>
          <li>
            <a href="">testimonials.</a>
          </li>
          <li>
            <a href="">contact.</a>
          </li>
        </ul>
        <div>
          <h3 className="text-2xl mt-4 mb-4">usefull links.</h3>
          <ul className="flex gap-2 flex-col">
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mt-4 mb-4">quick links.</h3>
          <ul className="flex gap-2 flex-col">
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
            <li>
              <a href="">Lorem, ipsum dolor.</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl mt-4 mb-4">contact.</h3>
          <p></p>
          <a href="tell:777 777 777"> 777 777 777</a>
          <a href="email:example@examplle.com">example@example.com</a>
        </div>
      </div>
    </Container>
  );
};

export default footer;
