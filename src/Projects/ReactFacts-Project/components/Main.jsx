import { useState } from "react";

export default function Main() {

  const [count, setCount] = useState(0);

  const add = () => setCount((prevCount) => prevCount + 1);
  const sub = () => setCount((prevCount) => prevCount - 1);

  return (
    <main className="pt-10 pl-10 relative bg-[#2B283A] h-screen -z-2">
      <h1 className="font-Inter text-[40px] font-bold ">
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
      <div className="flex items-center justify-center mt-5 gap-x-1 border rounded-lg w-1/2 mx-auto py-2">
        <button onClick={sub}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </button> 
        <div className="size-[80px] bg-white text-[#2B283A] flex-center border rounded-full">
            <span className="text-2xl font-Inter font-bold ">{count}</span>
        </div>
        <button onClick={add}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>
      </div>
    </main>
  );
}
