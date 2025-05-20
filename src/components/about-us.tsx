import Container from "./container";
import Aboutus from "./about-component/aboutus";
import Card from "./about-component/card";

const aboutus = () => {
  return (
    <Container>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-green-500 w-1/6 h-1">
          <h2 className="font-extrabold text-4xl">about us.</h2>
        </div>
        <Aboutus />
      </div>
      <Card
        image="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/team-member-01.jpg"
        position="	
Partner / Strategy
"
        name="amanda johonston"
        about="Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate."
      />
      <Card
        className="md:flex-row-reverse "
        image="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2019/11/team-member-02.jpg"
        position="Partner / Art Director"
        name="Brandon Harrison"
        about="Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate."
      />
    </Container>
  );
};

export default aboutus;
