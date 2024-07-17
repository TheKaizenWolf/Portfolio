import Layout from "../src/components/Layout";
import Skills from "../src/components/Skills";
import Hero from "src/components/Hero";
import CV from "src/components/CV";
import About from "src/components/About";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <CV />
    </Layout>
  );
};

export default Home;
