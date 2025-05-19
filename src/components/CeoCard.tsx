import Container from "./container";

interface CeoCardProps {
  name: string;
  position: string;
  Class?: string;
}

const CeoCard = ({ name, position, Class = "" }: CeoCardProps) => {
  return (
    <div className={`md:flex ${Class}`}>
      <div className="flex-1">
        <img
          src="https://websitedemos.net/wordpress-agency-04/wp-content/uploads/sites/98/2017/11/testimonial-image-free-img.jpg"
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-4 md:h-auto w-full h-4 bg-white flex-shrink-0" />
      <div className="flex-1 flex items-center">
        <Container>
          <div>
            <h3 className="mt-8 font-bold">{position}</h3>
            <h2 className="font-bold text-3xl mt-4">{name}</h2>
            <div className="h-1 mt-8 max-w-32 bg-green-500"></div>
            <p className="mt-8 mb-8">
              ” I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. “
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CeoCard;
