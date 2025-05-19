import Container from "./container";

const footer = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="bg-white text-black justify-center pt-12 mt-12 pb-24">
          <div className="grid md:grid-cols-2 ">
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
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl mt-4 mb-4">contact.</h3>
            <p>stod 58</p>
            <a href="tell:777 777 777"> 777 777 777</a>
            <a href="email:example@examplle.com">example@example.com</a>
          </div>
          <div className="flex flex-col mt-12 justify-center items-center gap-4 text-xs">
            <p>Copyright © 2025 theAgency</p>
            <p>Powered by theAgency</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default footer;
