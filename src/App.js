import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";

const App = () => (
  <ErrorBoundary>
    <Hero heroName="Adam" />
    <Hero heroName="Kamil" />
    {/* <Hero heroName="Mateusz" /> */}
    <Counter />
  </ErrorBoundary>
);

export default App;
