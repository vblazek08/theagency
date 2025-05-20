import Button from "../button";

interface CardProps {
  image: string;
  position: string;
  name: string;
  about: string;
  className?: string;
}

const Card = ({ image, position, name, about, className = "" }: CardProps) => {
  return (
    <div
      className={`mt-16 mb-16 flex flex-col md:flex-row pb-8 md:gap-12 ${className}`}
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className="mt-4 font-black">{position}</h3>
        <h2 className="mt-4 font-black text-2xl">{name}</h2>
        <p className=" max-w-96 mt-8">{about}</p>
        <Button className="mt-12">more.</Button>
      </div>
    </div>
  );
};

export default Card;
