const CategoryCard = ({ category }) => {
  return (
    <div className="card card-body bg-base-100 w-full shadow-xl">
      <div className="card-title flex items-center space-x-2">
        {category.icon}
        <span>{category.title}</span>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <li key={skillIndex}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
