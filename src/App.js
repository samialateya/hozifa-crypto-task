import "./App.css";
import Articles from "./Pages/Articles/Articles";
import Header from "./Components/Header/Header";
import Features from "./Pages/Features/Features";
import Hero from "./Pages/Hero/Hero";
import Partners from "./Pages/Partners/Partners";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Policies from "./Pages/Policies/Policies";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Articles />
      <Partners />
      <Newsletter />
      <Policies />
    </>
  );
}

export default App;
