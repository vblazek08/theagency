import Button from "../../button";

interface CardProps {
  image: string;
  position: string;
  name: string;
  about: string;
}

const card = ({ image, position, name, about }: CardProps) => {
  return (
    <div className="mt-16 mb-16">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className="mt-4 font-bold">{position}</h3>
        <h2 className="mt-4 font-bold text-2xl">{name}</h2>
        <p className="mt-8">{about}</p>
      </div>
      <Button className="mt-12">more.</Button>
    </div>
  );
};

export default card;
