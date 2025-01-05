import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Tech = () => {

  return (
    <>
    <Header useMotion={true} {...config.sections.skill} />
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            {/* <p className="text-center">{technology.name}</p> */}
          </div>
        ))}
        
      </div>
    </>
  );
};



export default SectionWrapper(Tech, "skill");
