import Button from "./button";
import Contact from "./contact";

interface MainBlockProps {
  title: string;
  question?: string;
  buttonText?: string;
  ShowLine?: boolean;
  ShowContact?: boolean;
  ShowButton?: boolean;
}

const MainBlock = ({
  title,
  question,
  buttonText,
  ShowContact = true,
  ShowButton = true,
  ShowLine = true,
}: MainBlockProps) => {
  return (
    <div
      className="pt-20 pb-20
"
    >
      <div className="bg-green-500 h-1.5 w-14"></div>

      <div className="mt-8">
        <h2 className="text-xl font-bold max-w-44">{question}</h2>
        <h2 className="text-2xl font-bold max-w-44 mt-8">{title}</h2>
      </div>
      {ShowButton && (
        <div className="mt-8">
          <Button size="md">{buttonText}</Button>
        </div>
      )}
      {ShowLine && <div className="bg-green-500 h-0.5 w-full mt-8"></div>}

      {ShowContact && <Contact />}
    </div>
  );
};

export default MainBlock;
