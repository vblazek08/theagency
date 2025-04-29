import Button from "@/components/button";
import Component from "@/components/component";
import Container from "@/components/container";
import Footer from "@/components/footer";
import AboutUs from "@/components/homepage/about-us";
import MainBlock from "@/components/main";
import Main from "@/components/main";
import Nav from "@/components/nav";

const about = () => {
  return (
    <div>
      <div className=" bg-[url(https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/hero-bg.jpg)] bg-cover bg-center">
        <div className="bg-black/70">
          <Container>
            <Nav />
            <MainBlock
              title="
Who We Are?
We’re A Digital Design & Branding Agency.
"
              ShowButton={false}
              ShowContact={false}
            />
          </Container>
        </div>
      </div>
      <AboutUs />
      <Component
        showTopHeading={true}
        topheadingtext="this is our"
        showButton={false}
        bottomheadingtext="visionary team."
        showTopDivider={false}
        showParagraph={false}
      />

      <Container>
        <div className="flex flex-col items-center justify-center text-center mt-8">
          <p>
            Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
            elit. Duis sed odio sit amet nibh vulputate.
          </p>
          <Button className="mt-8 font-bold" size="md">
            get in touch
          </Button>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/team-member-01.jpg"
              alt=""
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/team-member-01.jpg"
              alt=""
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/team-member-01.jpg"
              alt=""
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/team-member-01.jpg"
              alt=""
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/team-member-01.jpg"
              alt=""
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/team-member-01.jpg"
              alt=""
            />
          </div>
        </div>
        <Component
          showBottomDivider={false}
          showBottomHeading={false}
          showParagraph={false}
          buttontext="contact us."
          topheadingtext="dont be shy, say hello."
        />
      </Container>
      <div className="bg-white">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default about;
