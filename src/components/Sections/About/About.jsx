// ------ CUSTOM COMPONENTS ------
import Section from "../../Sections";
import Card from "../../UI/Card";
import CardImg from "../../UI/CardImg";
import ListLink from "../../UI/Links/ListLink";

export default function About() {
  const config = {
    id: 1,
    title: "About",
    header: "QA developer with interest in frontend technologies.",
  };

  return (
    <Section {...config}>
      <div className="features">
        <CardImg img="digital" alt="Img 1"></CardImg>
        <Card header="Who am I?">
          <p>
            My name is Aneta. Since 2020, I have been working as Quality
            Assurance Developer in a FinTech company. My interest in IT started
            back around 2018, when I worked as a Content Editor in a tech
            marketing team, where I managed company website using a{" "}
            <span className="highlight">CMS&nbsp;system</span>.
          </p>
          <p>
            Later, I started learning programming in a systematic way and built
            several{" "}
            <a href="#section--3" className="link highlight">
              projects
            </a>{" "}
            using mainly PHP & MySQL, Java and JavaFX. I also practised
            algorithms and coded my{" "}
            <a
              href="https://github.com/anetaradecka/02-ksiazka-adresowa-obiektowo"
              className="link highlight"
              target="_blank"
            >
              first project
            </a>{" "}
            in objective C++.
          </p>
          <p>
            Even though it was an interesting journey, I am most interested in
            front-end technologies. My latest projects include:
          </p>
          <ListLink arr={["HTML", "CSS", "Java Script", "React.JS"]}></ListLink>
        </Card>

        <Card header="How did I grow">
          <p>
            In July 2020, I started my first commercial experience in IT and
            since then I have been working as a Quality Assurance Developer. My
            main responsibility is to develop and maintain our{" "}
            <span className="highlight">UI tests</span> framework using
            WebDriver.io. In addition to that, I am in charge of manual testing
            for native <span className="highlight">Android</span> and{" "}
            <span className="highlight">iOS</span> applications, for which I
            also perform <span className="highlight">regression testing </span>
            and smoke testing before release.
          </p>
          <p>
            As a full-stack vertical team we have experience in working with
            Scrum and Kanban methodologies.
          </p>
          <ListLink
            arr={["WebDriver.io", "Playwrite.io", "mobile testing"]}
          ></ListLink>
        </Card>
        <CardImg img="grow" alt="Img 2"></CardImg>
      </div>
    </Section>
  );
}
