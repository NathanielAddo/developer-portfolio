import { Icon } from "@iconify/react";
import React, { Fragment, useRef } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

// Define types for your skill data
interface SoftwareSkill {
  skillName: string;
  iconifyTag: string;
}

interface SkillSection {
  title: string;
  subTitle: string;
  data: {
    title: string;
    lottieAnimationFile: string;
    softwareSkills: SoftwareSkill[];
    skills: string[];
  }[];
}

// Type for our refs object
type SkillRefs = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

const Skills: React.FC = () => {
  // Create refs for each tooltip target with proper typing
  const skillRefs = useRef<SkillRefs>({});

  const getSkillRef = (skillName: string): React.RefObject<HTMLDivElement> => {
    const key = skillName.replace(/\s/g, "");
    if (!skillRefs.current[key]) {
      skillRefs.current[key] = React.createRef<HTMLDivElement>();
    }
    return skillRefs.current[key];
  };

  if (!skillsSection) return null;

  return (
    <Fade bottom duration={2000}>
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{(skillsSection as SkillSection).title}</h1>
        <p className="lead">{(skillsSection as SkillSection).subTitle}</p>
        {(skillsSection as SkillSection).data.map((section, index) => {
          return (
            <Row className="my-5" key={index}>
              <Col lg="6" className="order-2 order-lg-1">
                <DisplayLottie animationPath={section.lottieAnimationFile} />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <h3 className="h3 mb-2">{section.title}</h3>
                <div className="d-flex justify-content-center flex-wrap mb-2">
                  {section.softwareSkills.map((skill, i) => {
                    const ref = getSkillRef(skill.skillName);
                    return (
                      <Fragment key={i}>
                        <div
                          ref={ref}
                          className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                        >
                          <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                        </div>
                        <UncontrolledTooltip 
                          delay={0} 
                          placement="bottom" 
                          target={ref}
                        >
                          {skill.skillName}
                        </UncontrolledTooltip>
                      </Fragment>
                    );
                  })}
                </div>
                <div>
                  {section.skills.map((skill, i) => {
                    return <p key={i}>{skill}</p>;
                  })}
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Fade>
  );
};

export default Skills;