import Button from "../components/button";

interface ComponentProps {
  buttontext?: string;
  paragraphtext?: string;
  topheadingtext?: string;
  bottomheadingtext?: string;
  showTopHeading?: boolean;
  showBottomHeading?: boolean;
  showButton?: boolean;
  showTopDivider?: boolean;
  showBottomDivider?: boolean;
  showParagraph?: boolean;
  topDividerClassName?: string;
}

const Component = ({
  buttontext,
  paragraphtext,
  topheadingtext,
  bottomheadingtext,
  showBottomHeading = true,
  showTopHeading = true,
  showButton = true,
  showTopDivider = true,
  showBottomDivider = true,
  showParagraph = true,
  topDividerClassName,
}: ComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-transparent">
      {showTopDivider && (
        <div className={`w-1 mt-12 h-8 bg-zinc-500 ${topDividerClassName}`} />
      )}
      {showTopHeading && (
        <div>
          <h2 className="font-bold text-2xl mt-4">{topheadingtext}</h2>
        </div>
      )}
      {showButton && (
        <div>
          <Button size="md" className="mt-12">
            {buttontext}
          </Button>
        </div>
      )}
      {showParagraph && (
        <div className="mt-12 text-center">
          <p className="font-extrabold text-2xl">{paragraphtext}</p>
        </div>
      )}
      {showBottomDivider && <div className="w-1 mt-16 h-8 bg-zinc-500" />}
      {showBottomHeading && (
        <div className="mt-12 text-center">
          <h2 className="font-extrabold text-2xl md:max-w-52 max-w-24">
            {bottomheadingtext}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Component;
