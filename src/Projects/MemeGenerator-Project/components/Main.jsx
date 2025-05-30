import { useState, useEffect } from "react";

export default function Main() {
  const [memeInfos, setMemeInfos] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setMemeInfos((prevMemeInfos) => {
      return { ...prevMemeInfos, [name]: value };
    });
  };

  const handleMemes = () => {
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    let memeUrl = allMemes[randomNumber].url;
    console.log(memeUrl);

    setMemeInfos((prevMemeInfos) => {
      return { ...prevMemeInfos, imageUrl: memeUrl };
    });
  };

  console.log(allMemes);
  return (
    <main className="flex flex-col w-1/2 mx-auto">
      <div className="grid grid-cols-2 text-[#2B283A] font-Inter gap-y-5 gap-x-8  my-5">
        <label className="text-xl font-Inter text-semibold">
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={memeInfos.topText}
            className="rounded-[5px] border-1 indent-1 w-full h-[35px] mt-1.5"
            onChange={handleChange}
          />
        </label>

        <label className="text-xl font-Inter text-semibold">
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={memeInfos.bottomText}
            className="rounded-[5px] border-1 indent-1 w-full h-[35px] mt-1.5"
            onChange={handleChange}
          />
        </label>
        <button
          onClick={handleMemes}
          className=" bg-gradient-to-r from-[#672280] to-[#A626D3] h-[45px] text-xl text-white rounded-[5px] col-span-2"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative flex flex-col justify-center items-center my-5">
        <img className="w-full rounded-[3px] h-auto" src={memeInfos.imageUrl} />
        <span className="top-0 absolute text-red-500 drop-shadow-2xl drop-shadow-black text-center uppercase m-[15px] p-[5px] text-shadow-2xl text-3xl font-Inter font-bold">
          {memeInfos.topText}
        </span>
        <span className="bottom-0 absolute text-red-500 drop-shadow-2xl drop-shadow-black text-center uppercase m-[15px] p-[5px] text-shadow-lg text-3xl font-Inter font-bold">
          {memeInfos.bottomText}
        </span>
      </div>
    </main>
  );
}
