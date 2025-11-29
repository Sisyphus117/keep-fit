import { simplifyTitle } from "../../utils/string";

function RecipeItem({ item }) {
  const { image, title: originTitle, nutrition } = item;
  const { nutrients } = nutrition;
  const title = simplifyTitle(originTitle);
  function handleImgLoadErr(e) {
    e.target.style.display = "none";
    e.target.parentElement.style.backgroundColor = "transparent";
  }
  return (
    <div className="flex min-w-[450px] max-w-[500px] items-center justify-between border-l-8 border-lime-light bg-primary-darker px-5 py-3">
      <div className="flex flex-col justify-between">
        <h2>{title}</h2>
        <ul>
          {nutrients.map((nutrient) => (
            <li key={nutrient.name}>
              {nutrient.name}: {nutrient.amount} {nutrient.unit}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-20 w-20 overflow-hidden rounded-full bg-white">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt={title}
          onError={handleImgLoadErr}
        />
      </div>
    </div>
  );
}

export default RecipeItem;
