import React, { use } from "react";
import { useContext, useState } from "react";
import StaysContext from "../context/StaysContext";
import LocationSelectedContext from "../context/LocationSelectedContext";

export default function EditLocation({ setLocationSelected }) {
  const stays = useContext(StaysContext);
  const locationSelected = useContext(LocationSelectedContext);

  const allCities = Array.from(
    new Set(stays.map((stay) => `${stay.city}, ${stay.country}`))
  );
  return (
    <>
      <div className="w-[95%] flex flex-col justify-start gap-1">
        <ul id="locacionesMobile" className="locacionesMobile flex flex-col">
          {allCities.map((cityOk, i) => (
            <li
              onClick={() => setLocationSelected(cityOk.split(",")[0])}
              key={i}
              className="botonSelecLocacionMobile p-1 h-8 gap-1 flex items-center justify-start"
            >
              <svg
                className="size-4 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{cityOk}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
