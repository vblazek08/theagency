import CeoCard from "@/components/CeoCard";
import Component from "@/components/component";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Logoshow from "@/components/logo-show";
import MainBlock from "@/components/main";
import Nav from "@/components/nav";

const testimonials = () => {
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
      <Component
        showButton={false}
        paragraphtext="testimonials."
        showTopDivider={false}
        showTopHeading={false}
        bottomheadingtext="Why our clients love us."
      />
      <Container>
        <p className="mt-8 text-center mb-12">
          I am text block. Click edit button to change this text. Proin gravida
          nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
          bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
          elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
          ornare odio
        </p>
      </Container>
      <CeoCard position="ceo of globex" name="jhon oliver" />
      <CeoCard
        position="ceo of intech"
        name="mark fowler"
        Class="md:flex-row-reverse"
      />
      <CeoCard
        position="ceo of massive dynamics"
        name="wayne richardson"
        Class="mb-4"
      />
      <Component
        showButton={false}
        topheadingtext="clients."
        showTopDivider={false}
        showParagraph={false}
        bottomheadingtext="forward thinking clients"
      />
      <Logoshow />
      <Component
        showBottomHeading={false}
        showParagraph={false}
        showBottomDivider={false}
        buttontext="view projects."
      />
      <Container>
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
  );
};

export default testimonials;
