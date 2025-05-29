export default function IngredientsList({ ingredients, handleRecipe }) {
  const ingredientsList = ingredients.map((item) => {
    return (
      <li
        key={Math.random()}
        className="font-Inter font-medium text-xl text-[#475467]"
      >
        {item}
      </li>
    );
  });

  const displayRecipe = () => {
    handleRecipe();
  };

  return (
    <section className="w-2/3 mx-auto">
      <h1 className="text-3xl font-Inter font-bold my-2 text-[#141413]">
        Ingredients on hand:
      </h1>
      <ul className="ml-5  my-5 list-disc flex flex-col gap-y-2.5">
        {ingredientsList}
      </ul>
      {ingredients.length > 3 && (
        <div className="bg-[#F0EFEB] flex items-center justify-between gap-x-2 px-5 py-8 mt-10 rounded-[8px] font-Inter">
          <div>
            <p className="text-[#141413] text-lg font-semibold mb-2">
              Ready for a recipe?
            </p>
            <p className="text-[#6B7280] text-sm">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            onClick={displayRecipe}
            className="bg-[#D17557] text-white rounded-[6px] w-auto text-center h-[38px] px-[17px] py-[9px] shadow-sm"
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}
