import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@/components/brand-icon";
import Button from "@/components/button";
import Component from "@/components/component";
import Contact from "@/components/contact";
import Container from "@/components/container";
import Footer from "@/components/footer";
import MainBlock from "@/components/main";
import Nav from "@/components/nav";

const contact = () => {
  return (
    <div>
      <div className=" bg-[url(https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/hero-bg.jpg)] bg-cover bg-center">
        <div className="bg-black/70">
          <Nav />
          <Container>
            <MainBlock
              question="where are we?"
              title="
            dont be shy, say hello."
              ShowButton={false}
              ShowContact={false}
              ShowLine={false}
            />
          </Container>
        </div>
      </div>
      <Container>
        <div className="grid md:grid-cols-2 gap-8 mt-2 mb-8">
          <div className="mt-8">
            <div className="bg-green-500 h-1 w-34"></div>
            <h3 className="font-black text-3xl mt-8 mb-8">contact us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Contact className="md:flex-cols" />
          </div>
          <div className="flex flex-col items-center mt-8">
            <input
              className="bg-white mt-4 w-full h-12 text-black p-4 rounded-sm"
              type="name"
              placeholder="your name"
            />
            <input
              className="bg-white mt-4 w-full h-12 text-black p-4 rounded-sm"
              type="email"
              placeholder="your email"
            />
            <textarea
              className="bg-white mt-4 w-full text-black p-4 rounded-sm"
              placeholder="your message"
              rows={4}
            />
            <Button className="mt-4 w-full font-black" size="lg">
              send message
            </Button>
          </div>
        </div>
      </Container>
      <div>
        <iframe
          className="w-full h-96"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="bg-zinc-800/30 pb-8 pt-8 text-green-500">
        <Component
          showButton={false}
          showTopDivider={false}
          showParagraph={false}
          showBottomHeading={false}
          topheadingtext="Follow us"
        />
        <div className="flex justify-center items-center mt-8 mb-8 gap-8 text-white">
          <a href="">
            <FacebookIcon className="size-6" />
          </a>
          <a href="">
            <TwitterXIcon className="size-6" />
          </a>
          <a href="">
            <InstagramIcon className="size-6" />
          </a>
          <a href="">
            <LinkedInIcon className="size-6" />
          </a>
          <a href="">
            <YoutubeIcon className="size-6" />
          </a>
        </div>
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

export default contact;
