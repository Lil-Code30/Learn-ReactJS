/**
 * Challenge:
 * 
 * - Create an App component in a separate file.
 *   Import it here and render it
 * - Create a "components" folder and a Header component.
 *   Render the Header inside the App component.
 * - Follow the Travel Journal design to build the Header
 *   for our page.
 */

export default function Header(){
    return(
        <header className="bg-[#F55A5A] flex items-center h-[100px] px-[8px] py-[8px] text-white justify-center gap-x-1.5">
            <img className="size-[24px]" src="../../../../Globe.svg" alt="" />
            <h1 className="font-medium font-Inter text-[15px]">my travel journal.</h1>
        </header>
    )
}