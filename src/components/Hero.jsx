const Hero = ({ heroName }) => {
  if (heroName === "Mateusz")
    throw new Error("The hero can not be called the Mateusz");

  return <p>Hero: {heroName}</p>;
};

export default Hero;
