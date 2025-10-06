import { useContext } from "react";
import TotalGuestsContext from "../context/TotalGuestsContext";
import EditGuests from "./EditGuests";
import EditLocation from "./EditLocation";

export default function SearchEdit({
  toggleLocation,
  setToggleLocation,
  toggleGuests,
  setToggleGuests,
  locationSelected,
  setLocationSelected,
}) {
  const { totalGuests, setTotalGuests } = useContext(TotalGuestsContext);

  return (
    <>
      <div
        id="selectLocacionMobile"
        className={`h-110 w-70 sm:w-122 lg:w-75 absolute lg:relative flex flex-col items-center justify-start py-4 duration-500
            ${
              toggleLocation & !toggleGuests
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
            `}
        style={{ fontFamily: "Mulish, sans-serif" }}
      >
        <EditLocation
          locationSelected={locationSelected}
          setLocationSelected={setLocationSelected}
          toggleLocation={toggleLocation}
          toggleGuests={toggleGuests}
        />
      </div>
      <div
        id="cantidadInviMobile"
        className={`h-110 w-70 sm:w-120 lg:w-75 absolute lg:relative flex flex-col items-center justify-start py-4 duration-500
          ${
            toggleGuests & !toggleLocation
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        style={{ fontFamily: "Mulish, sans-serif" }}
      >
        <EditGuests
          toggleLocation={toggleLocation}
          toggleGuests={toggleGuests}
        />
      </div>
    </>
  );
}
