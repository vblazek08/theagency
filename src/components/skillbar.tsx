interface SkillBarProps {
  name: string;
  width: string;
}

const SkillBar = ({ name, width }: SkillBarProps) => {
  return (
    <div className="space-y-2">
      <p className="mb-1">{name}</p>
      <div className="w-full bg-white">
        <div
          className="bg-green-400 text-white text-sm text-start font-bold h-8 flex items-center"
          style={{ width }}
        >
          <p className="ml-4">{width}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
