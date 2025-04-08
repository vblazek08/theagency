import React from "react";
import Nav from "../nav";
import Container from "../container";
import MainBlock from "../main";
import Textcard from "../text-card";
const HomePage = () => {
  return (
    <div>
      <div className=" bg-[url(https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/hero-bg.jpg)] bg-cover bg-center">
        <div className="bg-black/70">
          <Container>
            <Nav />
            <MainBlock
              title="An Innovative Agency For Forward-thinking Brands."
              buttonText="find out more"
            />
          </Container>
        </div>
      </div>
      <Container>
        <Textcard
          title="capabilities."
          subtitle="Brand Identities."
          text="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
        />
        <Textcard
          subtitle="Website / App Design."
          text="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
          line={false}
        />
        <Textcard
          subtitle="Art Direction."
          text="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
          line={false}
        />
      </Container>
    </div>
  );
};

export default HomePage;
