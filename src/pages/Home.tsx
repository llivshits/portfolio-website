import Resume from "../components/resume";
import Projects from "../components/projects";
import Header from "../components/header";
import Aboutme from "../components/aboutme";
import { useScroll } from "../hooks/scrollhook";

const Home: React.FC = () => {
  useScroll();
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <div id="header" className="flex-1 overflow-y-auto">
        <main className="mx-auto w-full max-w-3xl px-6 py-16 lg:max-w-5xl lg:px-8 lg:py-24 lg:text-[17px] 2xl:max-w-6xl">
          <Aboutme />
          <Projects />
          <Resume />
        </main>
      </div>
    </div>
  );
};

export default Home;
