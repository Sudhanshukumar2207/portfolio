// import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Tech = () => {

  return (
    <>
    <Header useMotion={true} {...config.sections.skill} />
      <div className="flex flex-row flex-wrap justify-center gap-16 mt-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="relative w-[120px] h-[120px] bg-black flex flex-col justify-end p-3 gap-3 rounded-lg cursor-pointer group">
          {/* Gradient Borders (Hover Effect) */}
          <div className="flex justify-center items-center w-full h-full ">
            <img className="h-20 w-20" src={technology.icon} alt="" />
          </div>
          <div className="absolute inset-0 -z-10 before:content-[''] before:absolute before:inset-0 before:left-[-5px] before:w-[130px] before:h-[130px] before:rounded-xl before:bg-gradient-to-br before:from-[#e81cff] before:to-[#40c9ff] before:transition-transform before:duration-[600ms] before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:before:rotate-[-90deg] group-hover:before:scale-x-[1.05] group-hover:before:scale-y-[1.05] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#fc00ff] after:to-[#00dbde] after:scale-[0.95] after:blur-[20px] group-hover:after:blur-[30px]">
          </div>
          
          
        </div>
        ))}
        
      </div>
    </>
  );
};



export default SectionWrapper(Tech, "skill");
