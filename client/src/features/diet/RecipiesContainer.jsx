import { useState } from "react";
import { recipeItemsFetchApi } from "../../apis/recipeItemsFetchApi";
import { useSelector } from "react-redux";
import { inSameDate } from "../../utils/DateConvert";
import { CALORIES_RANGE } from "../../utils/constants";
import toast from "react-hot-toast";
import SearchBar from "../../ui/components/SearchBar";
import RecipeItem from "./RecipeItem";

function RecipiesContainer() {
  const [query, setQuery] = useState("");
  const [recipeItems, setRecipeItems] = useState([]);
  const { bmr } = useSelector((store) => store.user);
  const { records } = useSelector((store) => store.records);
  const today = new Date();
  const todaySpend = records
    .filter((record) => inSameDate(record.date, today))
    .reduce((sum, record) => sum + record.calories, 0);
  const total = (bmr + todaySpend) / 6;
  async function searchRecipe() {
    try {
      const { results: newRecipeItems } = await recipeItemsFetchApi({
        query,
        minCalories: total - CALORIES_RANGE,
        maxCalories: total + CALORIES_RANGE,
      });
      if (!newRecipeItems) {
        throw new Error("No result found, please try something else");
      }
      setRecipeItems(newRecipeItems);
      setQuery("");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }
  return (
    <div className="w-fit">
      <SearchBar
        onChange={(e) => setQuery(e.target.value)}
        onClick={searchRecipe}
        value={query}
      />
      <div className="flex flex-col gap-2 px-4 py-3">
        {recipeItems.map((item) => (
          <RecipeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default RecipiesContainer;
