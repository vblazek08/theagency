interface TextProps {
  title?: string;
  subtitle: string;
  text: string;
  line?: boolean;
}
const Textcard = ({ title, subtitle, text, line = true }: TextProps) => {
  return (
    <div className="mt-16 flex mb-16 flex-col justify-center">
      {line && <div className="w-8 bg-green-600 h-1 mt-4 "></div>}
      <div>
        <h2 className="text-4xl font-extrabold mt-4">{title}</h2>
      </div>
      <div>
        <h3 className="text-2xl font-bold mt-8">{subtitle}</h3>
      </div>
      <div>
        <p className="mt-4">{text}</p>
      </div>
    </div>
  );
};

export default Textcard;
