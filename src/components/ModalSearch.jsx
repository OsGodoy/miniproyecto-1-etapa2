import React, { useState } from "react";
import SearchEdit from "./SearchEdit";
import { useContext } from "react";
import StaysContext from "../context/StaysContext";
import LocationSelectedContext from "../context/LocationSelectedContext";

export default function ModalSearch({
  toggleSearch,
  setToggleSearch,
  setLocationSelected,
}) {
  const [toggleLocation, setToggleLocation] = useState(false);
  const [toggleGuests, setToggleGuests] = useState(false);
  const stays = useContext(StaysContext);
  const locationSelected = useContext(LocationSelectedContext);

  return (
    <>
      <nav
        id="contenModalBuscarMobile"
        className={`fixed bg-slate-900/50 inset-0 z-50  ${
          toggleSearch
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 duration-500 pointer-events-none"
        } `}
      >
        <section
          id="modalBuscarMobile"
          className={`bg-white h-180 px-4 flex flex-col items-center justify-between duration-600 -translate-y-full
            ${toggleSearch ? "translate-y-0" : "-translate-y-100"}`}
        >
          <div className="w-70 sm:w-120 lg:w-180 xl:w-200 h-45 lg:py-18">
            <div
              style={{ fonFamily: "Mulish, sans-serif" }}
              className="h-15 w-full flex lg:hidden items-center justify-center"
            >
              <h6 className="w-[90%] text-[11px] font-semibold">
                Edit your search
              </h6>

              <button
                onClick={() => (
                  setToggleSearch(!toggleSearch),
                  setToggleGuests(false),
                  setToggleLocation(false)
                )}
                id="cerrarBuscarMobile"
                className="text-red-400 w-[10%] font-semibold text-xl flex items-center justify-end cursor-pointer active:scale-105 duration-100"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              style={{ fonFamily: "Mulish, sans-serif" }}
              className="h-25 lg:h-14 w-full flex flex-col lg:flex-row items-center justify-center rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.12)]"
            >
              <div
                onClick={() => (
                  setToggleLocation(!toggleLocation), setToggleGuests(false)
                )}
                id="botonLocacionMobile"
                className="border-1 border-gray-100 h-[50%] lg:h-full w-full rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl flex flex-col justify-center px-4"
              >
                <p className="text-[8px] font-semibold">LOCATION</p>
                <p
                  id="locacionSelecMobile"
                  className={`text-[14px] font-medium ${
                    locationSelected !== "Add location"
                      ? "text-red-400"
                      : "text-gray-300"
                  }`}
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  {locationSelected}
                </p>
              </div>

              <div
                onClick={() => (
                  setToggleGuests(!toggleGuests), setToggleLocation(false)
                )}
                id="botonCantidadInviMobile"
                className="border-1 border-gray-100 h-[50%] lg:h-full w-full rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl flex flex-col justify-center px-4"
              >
                <p className="text-[8px] font-semibold">GUESTS</p>
                <p
                  id="totalMobile"
                  className="text-gray-300 text-[14px] font-medium"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Add guests
                </p>
              </div>
            </div>
          </div>
          <div
            id="editarBusqueda"
            className="w-full h-110 flex items-center justify-center"
          >
            <SearchEdit
              toggleLocation={toggleLocation}
              setToggleLocation={setToggleLocation}
              toggleGuests={toggleGuests}
              setToggleGuests={setToggleGuests}
              locationSelected={locationSelected}
              setLocationSelected={setLocationSelected}
            />
          </div>
          <div
            id="busquedaOkMobile"
            className="h-20 w-full p-4 flex items-center justify-center"
          >
            <button
              onClick={() => (
                setToggleSearch(!toggleSearch),
                setToggleGuests(false),
                setToggleLocation(false)
              )}
              className="bg-red-400 h-10 w-30 rounded-2xl flex items-center justify-between px-6 duration-200 active:scale-95"
            >
              <svg
                className="size-4 text-white"
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
              <p className="text-white">search</p>
            </button>
          </div>
        </section>
      </nav>
    </>
  );
}
