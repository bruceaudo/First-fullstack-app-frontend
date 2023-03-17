import React from "react";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return <div className="flex flex-col w-2/3">
      <header className="border-b border-b-gray-600 py-5 px-2 sticky top-0 z-30 border-l border-l-gray-600 bg-black">
        <p className="font-bold text-2xl flex justify-start">Home</p>
      </header>
      <div className="flex gap-2 items-start py-5 px-8 cursor-pointer border-b border-b-gray-600">
        <img className="rounded-full w-12 h-12 overflow-hidden object-cover" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />

        <form className="flex flex-col grow divide-y">
          <textarea className="indent-2 h-28 bg-transparent hover:outline-none hover:border-none focus:outline-none focus:border-none" placeholder="What's happening?" />
          <div className="flex justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:bg-gray-600 rounded-full p-2 hover:text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

            <button className="bg-green-500 hover:opacity-75 px-5 py-2 rounded-full mt-3">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>;
};
export default Home;
