import { useContext } from "react";
import StaysContext from "../context/StaysContext";
import LocationSelectedContext from "../context/LocationSelectedContext";

export default function Cards({ setLocationSelected }) {
  const stays = useContext(StaysContext);

  const locationSelected = useContext(LocationSelectedContext);

  const filteredStays = stays.filter(
    (stay) =>
      locationSelected === "Add location" || stay.city === locationSelected
  );

  return (
    <>
      <section className="flex justify-end px-6 gap-2">
        <button className="flex items-center justify-center">
          <p
            onClick={() => setLocationSelected("Add location")}
            id="mostrarTodo"
            className="cursor-pointer text-[12px] text-red-400 font-medium active:underline active:font-semibold"
          >
            SHOW ALL
          </p>
        </button>
        <p
          id="cantidadCards"
          className="flex items-center justify-center text-[12px] text-gray-700"
        >
          {filteredStays.length} stays
        </p>
      </section>
      <section
        id="catalogoConten"
        className="grid grid-cols-1 sm:grid-cols-2 place-items-center px-4 gap-1 sm:gap-4 lg:grid-cols-3"
      >
        {filteredStays.map((stay, i) => (
          <div
            key={i}
            className={`catalogoTodos group cursor-pointer hover:scale-102 duration-300 w-full flex flex-col items-center justify-center gap-1 py-2 active:scale-98 lg:active:scale-100
              `}
          >
            <div className="absolute object-cover h-55 sm:h-60 lg:h-65 text-[9px] flex items-start justify-center self-end">
              <p className="w-18 p-0.5 bg-white rounded-bl-lg rounded-tl-sm flex items-center justify-center">
                <em>{`Max Guests: ${stay.maxGuests}`}</em>
              </p>
            </div>
            <img
              className="object-cover h-50 sm:h-55 lg:h-60 w-full rounded-2xl"
              loading="lazy"
              src={stay.photo}
              alt={stay.type}
            ></img>
            <div className="w-[98%] flex items-center justify-between">
              {stay.superHost && (
                <div className="flex items-center justify-center border h-8 w-[28%] rounded-xl border-red-400">
                  <p className="text-[9px] sm:text-[10px] font-medium">
                    SUPER HOST
                  </p>
                </div>
              )}
              <h3 className="flex text-[13px] font-medium text-gray-500 p-1">
                {`${stay.type}. `}
                {stay.beds && (stay.beds < 2 ? "1 bed" : stay.beds + " beds")}
              </h3>
              <div className="w-[15%] flex items-center justify-center gap-1">
                <svg
                  className="group-hover:animate-[spin_1.1s_ease-out] size-4 w-[45%] text-red-400 fill-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <p className="w-[55%] flex place-content-center text-[12px] font-medium text-gray-600">
                  {stay.rating}
                </p>
              </div>
            </div>
            <p className="w-[98%] text-sm font-semibold text-gray-700 truncate px-1.5">
              {stay.title}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
