import EditGuests from "./EditGuests";
import EditLocation from "./EditLocation";

export default function SearchEdit(props) {
  return (
    <>
      <div
        id="selectLocacionMobile"
        className={`h-110 w-[85%] absolute flex flex-col items-center justify-start py-4 duration-500
            ${
              props.toggleLocation & !props.toggleGuests
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 duration-500 pointer-events-none"
            }
            `}
        style={{ fontFamily: "Mulish, sans-serif" }}
      >
        <EditLocation
          locationSelected={props.locationSelected}
          setLocationSelected={props.setLocationSelected}
        />
      </div>
      <div
        id="cantidadInviMobile"
        className={`cantidadInviMobile h-110 w-[85%] absolute flex flex-col items-center justify-start py-4 duration-500
          ${
            props.toggleGuests & !props.toggleLocation
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
