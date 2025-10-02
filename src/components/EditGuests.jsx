import React from "react";

export default function EditGuests() {
  return (
    <>
      <div className="h-[28%] w-[95%] flex flex-col justify-start gap-1">
        <p className="text-sm font-medium">Adults</p>
        <p className="text-sm text-gray-400">Ages 13 or above</p>
        <div className="w-28 flex items-center justify-between self-start">
          <button className="menosAdultos border-1 border-gray-400 bg-gray-200  text-gray-400 h-5 w-5 flex items-center justify-center rounded-sm duration-200 active:scale-90">
            -
          </button>
          <p id="cantidadAdultosMobile">0</p>
          <button className="masAdultos border-1 border-gray-400 bg-gray-200  text-gray-400 h-5 w-5 flex items-center justify-center rounded-sm duration-200 active:scale-90">
            +
          </button>
        </div>
      </div>
      <div className="h-[28%] w-[95%] flex flex-col justify-start gap-1">
        <p className="text-sm font-medium">Children</p>
        <p className="text-sm text-gray-400">Ages 2-12</p>
        <div className="w-28 flex items-center justify-between self-start">
          <button className="menosPeques border-1 border-gray-400 bg-gray-200 text-gray-400 h-5 w-5 flex items-center justify-center rounded-sm duration-200 active:scale-90">
            -
          </button>
          <p id="cantidadPequesMobile">0</p>
          <button className="masPeques border-1 border-gray-400 bg-gray-200 text-gray-400 h-5 w-5 flex items-center justify-center rounded-sm duration-200 active:scale-90">
            +
          </button>
        </div>
      </div>
    </>
  );
}
