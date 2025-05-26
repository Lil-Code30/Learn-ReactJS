/**
 * Challenge: complete the Navbar to match the Figma design
 *
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */

export default function Navbar() {
  return (
    <header className="flex gap-x-2 items-center bg-[#21222A] px-[8px] py-[16px]">
      <nav className="font-inter">
        <img
          className="size-[35px]"
          src="../../../../react-logo.png"
          alt="react logo"
        />
      </nav>
      <h1 className="text-[#61DAFB] font-Inter font-bold text-2xl">
        ReactFacts
      </h1>
    </header>
  );
}
