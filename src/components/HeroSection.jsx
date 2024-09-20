import { ChevronDownIcon } from '@heroicons/react/20/solid';
import hero from '../assets/images/hero.jpg';

const HeroSection = () => {
  return (
    <section
      className="hero min-h-[calc(100vh-4rem)] flex justify-center items-center relative"
      style={{
        backgroundImage: hero,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
      <div className="text-neutral-content text-center relative z-10">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            Hello, world!
          </h1>
          <p className="px-4 mb-5">
            Меня зовут Серафим. Разрабатываю игры, программирую, преподаю, веду
            YouTube, бегаю и еще много чего
          </p>
          <ChevronDownIcon
            className="w-24 h-24 motion-safe:animate-bounce mx-auto"
            onClick={() => {
              document
                .getElementById('skills')
                .scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
