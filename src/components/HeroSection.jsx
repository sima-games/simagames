import hero from '../assets/images/hero.jpg';

const HeroSection = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hey! I'm Serafim</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Check out my games</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
