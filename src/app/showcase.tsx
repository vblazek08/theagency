import Component from "./component";
import LogoShow from "./components/logo-show";

const showcase = () => {
  return (
    <div className="pt-12 flex flex-col items-center justify-center bg-zinc-800/30">
      <div className="bg-green-600 h-2 w-1/6"></div>
      <div className="mt-8">
        <h2 className="font-extrabold text-4xl">latest work.</h2>
      </div>
      <div className="mt-4 max-w-52 translate-y-28 shadow-2xl z-20">
        <img
          src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-08-free-img.jpg"
          alt=""
        />
      </div>
      <div className="mt-4 bg-black max-w-72 translate-y-18 z-10">
        <img
          src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-05-free-img.jpg"
          alt=""
        />
      </div>
      <div className="mt-4 max-w-52 translate-y-8 shadow-2xl z-20">
        <img
          src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-06-free-img.jpg"
          alt=""
        />
      </div>
      <div className="mt-4 max-w-72 shadow-2xl z-10">
        <img
          src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2021/03/portfolio-image-07-free-img.jpg"
          alt=""
        />
      </div>
      <Component
        buttontext="view all projects"
        paragraphtext="clients."
        bottomheadingtext="forwoard thinking clients."
        showTopHeading={false}
      />
      <LogoShow />
    </div>
  );
};

export default showcase;
