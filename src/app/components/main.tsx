import Button from "../components/button";

interface MainBlockProps {
  title: string;
  buttonText: string;
}

const MainBlock = ({ title, buttonText }: MainBlockProps) => {
  return (
    <div className="mt-20">
      <div className="bg-green-500 h-1.5 w-8"></div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold max-w-36">{title}</h2>
      </div>

      <div className="mt-8">
        <Button size="md">{buttonText}</Button>
      </div>

      <div className="bg-green-500 h-0.5 w-full mt-8"></div>
    </div>
  );
};

export default MainBlock;
