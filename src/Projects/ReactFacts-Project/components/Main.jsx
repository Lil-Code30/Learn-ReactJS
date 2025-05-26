/**
 * Challenge: Build out the main content section!
 *
 * For now, skip 2 aspects of the design and we'll work on them later:
 *   1. The colored bullets in the list
 *   2. The larger gray React logo on the side
 */

export default function Main() {
  return (
    <main className="pt-10 pl-10 relative">
      <h1 className="font-Inter text-[40px] font-bold">
        Fun facts about React
      </h1>
      <ul className="max-w-[400px] list-disc mt-5 pl-8 text-[16px] font-normal font-Inter marker:text-[#61DAFB] marker:text-xl ">
        <li className="my-3">Was first released in 2013</li>
        <li className="my-3">Was originally created by Jordan Walke</li>
        <li className="my-3">Has well over 200K stars on GitHub</li>
        <li className="my-3">Is maintained by Meta</li>
        <li className="my-3">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
      <img
        className="absolute right-0 top-1/2 -z-1"
        src="../../../../reactjs-half-icon.png"
        alt="react half logo"
      />
    </main>
  );
}
