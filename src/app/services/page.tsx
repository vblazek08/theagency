import Component from "@/components/component";
import Container from "@/components/container";
import Footer from "@/components/footer";
import MainBlock from "@/components/main";
import Nav from "@/components/nav";
import Services from "@/components/services";
import Statistics from "@/components/statistics";
import Textcard from "@/components/text-card";

const services = () => {
  return (
    <div>
      <div className=" bg-[url(https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/hero-bg.jpg)] bg-cover bg-center">
        <div className="bg-black/70">
          <Nav />
          <Container>
            <MainBlock
              question="What We Do?"
              title="
              Ask Us About Branding, Design & Advertising.  "
              ShowButton={false}
              ShowContact={false}
              ShowLine={false}
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
          <Statistics />
          <div className="mt-12">
            <Component
              showBottomDivider={false}
              showBottomHeading={false}
              showParagraph={false}
              buttontext="contact us."
              topheadingtext="dont be shy, say hello."
            />
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default services;
