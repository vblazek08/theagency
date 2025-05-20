import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@/components/brand-icon";
import Container from "./container";
import { links } from "./navigation";

const footer = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="bg-white grid md:grid-cols-2 lg:grid-cols-4 text-black justify-center pt-12 mt-12 pb-24">
          <div className="">
            <h2 className="font-black text-3xl mb-8">The Agency</h2>
            <ul role="list">
              {links.map((link, index) => (
                <li key={index}>
                  <a className=" w-full" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mt-4 mb-4 ">usefull links.</h3>
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
            <h3 className="text-2xl mt-4 mb-4 ">quick links.</h3>
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
            <p>stod 58</p>
            <a href="tell:777 777 777"> 777 777 777</a>
            <a className="font-black" href="email:example@examplle.com">
              example@example.com
            </a>

            <div className="flex gap-4 flex-row mt-8">
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
        </div>
        <div className="flex flex-col text-black md:flex-row md:justify-between pb-12 md:text-sm mt-12 justify-center items-center gap-4 text-xs">
          <p>Copyright © 2025 theAgency</p>
          <p>Powered by theAgency</p>
        </div>
      </Container>
    </div>
  );
};

export default footer;
