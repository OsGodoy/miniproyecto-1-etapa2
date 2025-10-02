import EditGuests from "./EditGuests";
import EditLocation from "./EditLocation";

export default function SearchEdit({ toggleLocation, toggleGuests }) {
  return (
    <>
      <div
        id="selectLocacionMobile"
        className={`h-110 w-[85%] absolute flex flex-col items-center justify-start py-4 duration-500
            ${
              toggleLocation & !toggleGuests
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 duration-500 pointer-events-none"
            }
            `}
        style={{ fontFamily: "Mulish, sans-serif" }}
      >
        <EditLocation />
      </div>
      <div
        id="cantidadInviMobile"
        className={`cantidadInviMobile h-110 w-[85%] absolute flex flex-col items-center justify-start py-4 duration-500
          ${
            toggleGuests & !toggleLocation
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 duration-500 pointer-events-none"
          }`}
        style={{ fontFamily: "Mulish, sans-serif" }}
      >
        <EditGuests />
      </div>
    </>
  );
}
