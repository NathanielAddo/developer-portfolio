import dynamic from "next/dynamic";
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

// Dynamic imports with loading states
const Navigation = dynamic(
  () => import("../components/Navigation"),
  { loading: () => <div>Loading Navigation...</div> }
);

const Greetings = dynamic(
  () => import("../containers/Greetings"),
  { loading: () => <div>Loading Greetings...</div> }
);

const Skills = dynamic(
  () => import("../containers/Skills"),
  { loading: () => <div>Loading Skills...</div> }
);

const Proficiency = dynamic(
  () => import("../containers/Proficiency"),
  { loading: () => <div>Loading Proficiency...</div> }
);

const Education = dynamic(
  () => import("../containers/Education"),
  { loading: () => <div>Loading Education...</div> }
);

const Experience = dynamic(
  () => import("../containers/Experience"),
  { loading: () => <div>Loading Experience...</div> }
);

const Projects = dynamic(
  () => import("../containers/Projects"),
  { loading: () => <div>Loading Projects...</div> }
);

const Feedbacks = dynamic(
  () => import("../containers/Feedbacks"),
  { loading: () => <div>Loading Feedbacks...</div> }
);

const GithubProfileCard = dynamic(
  () => import("../components/GithubProfileCard"),
  { loading: () => <div>Loading Profile...</div> }
);

interface HomeProps {
  githubProfileData: GithubUserType | null;
}

export default function Home({ githubProfileData }: HomeProps) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      {githubProfileData ? (
        <GithubProfileCard {...githubProfileData} />
      ) : (
        <div className="error-message">
          GitHub profile data could not be loaded
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  let githubProfileData: GithubUserType | null = null;

  try {
    const response = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`
    );
    
    if (response.ok) {
      githubProfileData = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch GitHub profile:", error);
  }

  return {
    props: { githubProfileData },
    // Re-generate the page every 24 hours
    revalidate: 86400,
  };
}