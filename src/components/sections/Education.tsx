import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { Educations } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TEducation } from "../../types";
import { config } from "../../constants/config";

const EducationCard: React.FC<TEducation> = (Education) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        lineHeight:"40px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={Education.session}
      iconStyle={{ background: Education.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={Education.icon}
            alt={Education.collage}
            className="h-[90%] w-[90%] object-contain"
          />
        </div>
      }
    >
      <div>
        {/* <h4 className="text-[18px] font-bold text-white">{Education.session}</h4> */}
        <h3 className="text-[22px] font-bold text-white">{Education.class}</h3>
        <h5 className="text-secondary text-[16px] font-semibold">{Education.collage}</h5>
        <h6>{Education.marks}</h6>
      </div>

      {/* <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {Educations.map((Education, index) => (
            <EducationCard key={index} {...Education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
