
import Section from "../../Sections";
import Box from "../../UI/Box";
import { projects } from "../../../data/data"

export default function Projects() {
  const config = {
    id: 2,
    title: "Projects",
    header: "QA developer with interest in frontend technologies.",
  };

  return (
    <Section {...config}>
      <div className="projects">
        <div id="projects__container">
            {projects.map((project, index) => <Box index={index} {...project}></Box>)}
        </div>
      </div>
    </Section>
  );
}
