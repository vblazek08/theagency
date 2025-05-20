import Component from "@/components/component";
import Container from "@/components/container";
import Footer from "@/components/footer";
import MainBlock from "@/components/main";
import Nav from "@/components/nav";
import Services from "@/components/services";
import Statistics from "@/components/statistics";

const projects = () => {
  return (
    <div>
      <div className=" bg-[url(https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/hero-bg.jpg)] bg-cover bg-center">
        <div className="bg-black/70">
          <Nav />
          <Container>
            <MainBlock
              question="What We Did?"
              title="We Take Great Pride In Our Work."
              ShowButton={false}
              ShowContact={false}
              ShowLine={false}
            />
          </Container>
        </div>
      </div>
      <div className="grid grid-cols-1 md:text-start md:grid-cols-2 mt-8 text-center gap-4 p-4">
        <div>
          <div className="h-1 w-12 bg-green-500"></div>
          <h2 className="font-black text-2xl mt-4">Innovative work</h2>
        </div>
        <div>
          <p className="font-black">
            We Are An Innovation Focused Digital Production Agency Capable Of
            Adapting To Continuous Change
          </p>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor a ornare odio sed non mauris vitae erat consequat
            auctor eu in elit.
          </p>
          <p className="mt-4">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Mauris in erat justo.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 bg-zinc-800/30">
        <Container>
          <div className="flex flex-col gap-4 mt-8 mb-8 items-center justify-center">
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-08-free-img.jpg"
              alt=""
              className="max-w-64"
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-08-free-img.jpg"
              alt=""
              className="max-w-64"
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-08-free-img.jpg"
              alt=""
              className="max-w-64"
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-08-free-img.jpg"
              alt=""
              className="max-w-64"
            />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col gap-4 mt-8 mb-8 items-center justify-center">
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-05-free-img.jpg"
              alt=""
              className="max-w-64"
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-05-free-img.jpg"
              alt=""
              className="max-w-64"
            />
            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-05-free-img.jpg"
              alt=""
              className="max-w-64"
            />

            <img
              src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-05-free-img.jpg"
              alt=""
              className="max-w-64"
            />
          </div>
        </Container>
      </div>
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

export default projects;
