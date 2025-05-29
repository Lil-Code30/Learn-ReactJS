import { useState } from "react";

import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  };

  return (
    <main className="bg-[#FAFAF8] text-[#141413] font-Inter h-full py-5">
      <form
        action={addIngredient}
        className="flex items-center justify-center gap-x-2 my-10 w-2/3 mx-auto"
      >
        <input
          className="bg-[#FFFFFF] border-1  border-[#D1D5DB] rounded-[6px]  min-w-[150px] md:grow-2 max-w-2/3 h-[40px] py-[9px] px-[13px] shadow-sm"
          type="text"
          name="ingredient"
          id=""
          placeholder="e.g oregano"
        />
        <button className="w-[183px] h-[40px] flex-none flex-center gap-x-0.5 rounded-[6px] py-[9px] px-[17px] bg-[#141413] text-white shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span>Add ingredient</span>
        </button>
      </form>
      {ingredients.length > 0 && (
        <>
          <IngredientsList
            getRecipeFromMistral={getRecipeFromMistral}
            handleRecipe={toggleRecipeShown}
            ingredients={ingredients}
          />
          {recipeShown && (
            <ClaudeRecipe
              getRecipeFromMistral={getRecipeFromMistral}
              ingredients={ingredients}
            />
          )}
        </>
      )}
    </main>
  );
}
