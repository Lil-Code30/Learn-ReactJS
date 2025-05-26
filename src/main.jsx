import { createRoot } from "react-dom/client"
import './styles.css'


const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page(){
  return (
    <ol>
      <li>Was first release in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ol>
  )
}


root.render(
    <main>
        <img src="/react-logo.png"  alt="React logo" />
        <h1>Fun facts about React!</h1>
        <Page/>
    </main>
)