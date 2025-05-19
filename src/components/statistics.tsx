import Button from "./button";
import SkillBar from "./skillbar";

const statistics = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-12 ">
        <div className="h-1 w-16 bg-green-500"></div>
        <h2 className="mt-12 font-bold text-2xl">statistics.</h2>
        <p className="mt-16 text-center ">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
          amet mauris.
        </p>
        <Button size="md" className="mt-8">
          view projects.
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-12 ">
        <SkillBar name="Photoshop." width="75%" />
        <SkillBar name="Illustartor." width="87%" />
        <SkillBar name="After Effets." width="65%" />
        <SkillBar name="Indesign." width="80%" />
      </div>
    </div>
  );
};

export default statistics;
