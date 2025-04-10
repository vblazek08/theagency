import Button from "../../button";

interface CardProps {
  image: string;
  position: string;
  name: string;
  about: string;
}

const card = ({ image, position, name, about }: CardProps) => {
  return (
    <div>
      <div>
        <img src="{image}" alt="" />
      </div>
      <div>
        <h3>{position}</h3>
        <h2>{name}</h2>
        <p>{about}</p>
      </div>
      <Button>more.</Button>
    </div>
  );
};

export default card;
