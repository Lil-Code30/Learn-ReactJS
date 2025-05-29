export default function Main() {
  return (
    <main className="flex flex-col w-1/2 mx-auto">
      <div className="grid grid-cols-2 text-[#2B283A] font-Inter gap-y-5 gap-x-8  my-5">
        <label className="text-xl font-Inter text-semibold">
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            className="rounded-[5px] border-1 indent-1 w-full h-[35px] mt-1.5"
          />
        </label>

        <label className="text-xl font-Inter text-semibold">
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            className="rounded-[5px] border-1 indent-1 w-full h-[35px] mt-1.5"
          />
        </label>
        <button className=" bg-gradient-to-r from-[#672280] to-[#A626D3] h-[45px] text-xl text-white rounded-[5px] col-span-2">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <img
          className="w-full rounded-[3px] h-auto"
          src="http://i.imgflip.com/1bij.jpg"
        />
        <span className="top-0 absolute text-center uppercase m-[15px] p-[5px] text-shadow-2xl text-3xl font-Inter font-bold">
          One does not simply
        </span>
        <span className="bottom-0 absolute text-center uppercase m-[15px] p-[5px] text-shadow-lg text-3xl font-Inter font-bold">
          Walk into Mordor
        </span>
      </div>
    </main>
  );
}
