import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { internships } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TInternship } from "../../types";
import { config } from "../../constants/config";
import { useMediaQuery } from "react-responsive";

const InternshipCard: React.FC<TInternship> = (internship) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        lineHeight:"40px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={internship.date}
      iconStyle={{ background: internship.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={internship.icon}
            alt="logo"
            className="h-[90%] w-[90%] object-contain"
          />
        </div>
      }
    >
      <div>
        {/* <h4 className="text-[18px] font-bold text-white">{Education.session}</h4> */}
        <h3 className="text-[22px] font-bold text-white">{internship.companyName}</h3>
        <h4 className="text-[18px] font-semibold">{internship.post}</h4>
        <h6 className="text-secondary">{internship.role}</h6>
        <p className="text-gray-400">{internship.technology}</p>
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

const Internship = () => {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 1170px)" });
  return (
    <>
      <Header useMotion={true} {...config.sections.intern} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline  layout={isSmallScreen ? "1-column-right" : "2-columns"}>
          {internships.map((Education, index) => (
            <InternshipCard key={index} {...Education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Internship, "internship");
