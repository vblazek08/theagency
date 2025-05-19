import React from "react";
import Nav from "../../components/nav";
import MainBlock from "../../components/main";
import Textcard from "../../components/text-card";
import Component from "@/components/component";
import Aboutus from "@/components/about-us"; // Adjust the path as necessary
import Footer from "../../components/footer";
import Services from "@/components/services";
import Container from "@/components/container";
import Showcase from "@/components/showcase";
const HomePage = () => {
  return (
    <div>
      <div className=" bg-[url(https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/hero-bg.jpg)] bg-cover bg-center">
        <div className="bg-black/70">
          <Nav />
          <Container>
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
      <div className="bg-zinc-800/30">
        <Container>
          <Services />
          <Showcase />
          <Component
            buttontext="view projects"
            showParagraph={false}
            showBottomHeading={false}
            showBottomDivider={false}
          />
          <Aboutus />
        </Container>
      </div>
      <Component
        showBottomDivider={false}
        showBottomHeading={false}
        showParagraph={false}
        buttontext="contact us."
        topheadingtext="dont be shy say hello"
      />
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
