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

export default function Header() {
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
