import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";

const App = () => (
  <ErrorBoundary>
    <Hero heroName="Adam" />
    <Hero heroName="Kamil" />
    {/* <Hero heroName="Mateusz" /> */}
  </ErrorBoundary>
);

export default App;
