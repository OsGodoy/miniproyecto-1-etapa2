import React from "react";

export default function Search({ toggleSearch, setToggleSearch }) {
  return (
    <>
      <div className="h-20 sm:h-20 w-full sm:w-80 flex items-center justify-center">
        <section
          id="botonBuscarMobile"
          className="text-xs h-full w-full flex items-center justify-center duration-200 active:scale-95 lg:active:scale-100 hover:scale-105"
        >
          <button
            onClick={() => setToggleSearch(!toggleSearch)}
            className="cursor-pointer flex items-center justify-center h-[65%] w-[92%] rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.12)]"
          >
            <div className="border-1 border-gray-100 rounded-l-2xl h-full w-[45%] flex items-center justify-center p-2">
              <p className="flex items-center justify-center text-gray-400 h-[90%] w-[90%]">
                Add location
              </p>
            </div>
            <div className="border-1 border-gray-100  h-full w-[40%] flex items-center justify-center p-2">
              <p className="flex items-center justify-center text-gray-400  h-[90%] w-[90%]">
                Add guests
              </p>
            </div>
            <div className="border-1 border-gray-100  rounded-r-2xl h-full w-[20%] flex items-center justify-center">
              <svg
                className="size-3.5 text-red-400 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </button>
        </section>
      </div>
    </>
  );
}
