import NavBar from "@components/nav-bar";
import Hero from "@components/hero";
import Highlights from "@components/highlights";
import Model from "@components/model";
import Features from "@components/features";
import HowItWorks from "@components/how-it-works";
import Footer from "@components/footer";

const App: React.FunctionComponent = () => (
  <main className="bg-black">
    <NavBar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
  </main>
);

export default App;
