import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe-container w-2/3 mx-auto mt-5 text-[#141413] font-Inter text-lg">
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
