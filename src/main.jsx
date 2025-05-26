import { createRoot } from "react-dom/client";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */

function MainContent() {
  return (
    <main className="px-2">
      <h1 className="text-center text-3xl my-2">
        Reason I am excited to learn React
      </h1>
      <ol className="list-decimal list-inside">
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

/** Mini Challenge:
 *
 * Move the `header` element from the Page component into
 * its own component called "Header"
 *
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

/**
 * Challenge:
 *
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

/**
 * Challenge:
 *
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 *
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
 */
/**
 * Challenge:
 *
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
 */

function Header() {
  return (
    <header className="header">
      <img src="/react-logo.png" className="logo" alt="React logo" />
      <nav>
        <ul className="nav-menu">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="text-center py-3 bg-black absolute bottom-0 w-full text-lg font-semibold">
      <p> &copy; 2025 Ismael development. All rights reserved.</p>
    </footer>
  );
}

root.render(
  <>
    <Header />
    <MainContent />
    <Footer />
  </>,
);
