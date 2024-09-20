import { CodeBracketIcon } from '@heroicons/react/24/solid';
import CategoryCard from './CategoryCard';
import {
  CircleStackIcon,
  GlobeAltIcon,
  PlayIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import biceps from '../../assets/images/flexed_biceps.png';

const Skillset = () => {
  const skills = [
    {
      title: 'Game Development',
      icon: <PlayIcon className="w-8 h-8" />,
      skills: ['Unity (C#): 2D/3D', 'Phaser', 'Godot'],
    },
    {
      title: 'Web Development',
      icon: <GlobeAltIcon className="w-8 h-8" />,
      skills: [
        'Backend: Python (Django, Flask, FastAPI), Nginx',
        'Frontend: JavaScript, TypeScript, React, Tailwind CSS',
        'Full-Stack: Node.js, Express.js',
      ],
    },
    {
      title: 'Databases & DevOps',
      icon: <CircleStackIcon className="w-8 h-8" />,
      skills: [
        'Databases: PostgreSQL, MySQL, MongoDB',
        'Version Control: Git, GitHub',
        'CI/CD: GitHub Actions, Jenkins',
        'Containerization: Docker',
      ],
    },
    {
      title: 'Programming Languages',
      icon: <CodeBracketIcon className="w-8 h-8" />,
      skills: [
        'C++',
        'C',
        'Java',
        'Kotlin',
        'Python',
        'JavaScript',
        'TypeScript',
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      skills: [
        'Spring Boot',
        'Jetpack Compose',
        'React Native',
        'API Development: JWT, OAuth, RESTful architecture',
      ],
    },
    {
      title: 'Other Skills',
      icon: <StarIcon className="w-8 h-8" />,
      skills: [
        'English (B2 level)',
        'Premiere Pro, Audition, Photoshop, Illustrator',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 scroll-mt-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center pl-2 gap-4">
          <div className="w-16 pb-8">
            <img
              src={biceps}
              style={{
                backgroundSize: 'cover',
              }}
            />
          </div>
          <span className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Мои скиллы
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {skills.map((category, i) => (
              <CategoryCard key={i} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
