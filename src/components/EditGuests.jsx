import React, { useEffect } from "react";
import { useContext, useState } from "react";
import StaysContext from "../context/StaysContext";
import TotalGuestsContext from "../context/TotalGuestsContext";
import ToggleShowContext from "../context/ToggleShowContext";

export default function EditGuests(toggleLocation, toggleGuests) {
  const stays = useContext(StaysContext);

  const { isShowAll, setIsShowAll } = useContext(ToggleShowContext);

  const [adultsLot, setAdultsLot] = useState(0);

  const [childrenLot, setChildrenLot] = useState(0);

  const { totalGuests, setTotalGuests } = useContext(TotalGuestsContext);
  useEffect(() => {
    setTotalGuests(adultsLot + childrenLot);
  }, [adultsLot, childrenLot, setTotalGuests]);

  useEffect(() => {
    if (isShowAll) {
      setAdultsLot(0);
      setChildrenLot(0);
    } else {
      setAdultsLot(adultsLot);
      setChildrenLot(childrenLot);
    }
  }, [isShowAll]);

  return (
    <>
      <div className="h-[28%] w-[95%] flex flex-col justify-start gap-1">
        <p className="text-sm font-medium">Adults</p>
        <p className="text-sm text-gray-400">Ages 13 or above</p>
        <div className="w-28 flex items-center justify-between self-start">
          <button
            onClick={() => {
              {
                setAdultsLot(adultsLot > 0 ? adultsLot - 1 : 0);
                setIsShowAll(false);
              }
            }}
            className="menosAdultos border-1 border-gray-400 bg-gray-200  text-gray-400 h-5 w-5 flex items-center justify-center rounded-sm duration-200 active:scale-90 cursor-pointer"
          >
            -
          </button>
          <p id="cantidadAdultosMobile">{adultsLot}</p>
          <button
            onClick={() => {
              {
                setAdultsLot(adultsLot + 1);
                setIsShowAll(false);
              }
            }}
            className="masAdultos border-1 border-gray-400 bg-gray-200  text-gray-400 h-5 w-5 flex items-center justify-center rounded-sm duration-200 active:scale-90 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      <div className="h-[28%] w-[95%] flex flex-col justify-start gap-1">
        <p className="text-sm font-medium">Children</p>
        <p className="text-sm text-gray-400">Ages 2-12</p>
        <div className="w-28 flex items-center justify-between self-start">
          <button
            onClick={() => {
              setChildrenLot(childrenLot > 0 ? childrenLot - 1 : 0);
              setIsShowAll(false);
            }}
            className="menosPeques border-1 border-gray-400 bg-gray-200 text-gray-400 h-5 w-5 flex items-center justify-center rounded-sm duration-200 active:scale-90 cursor-pointer"
          >
            -
          </button>
          <p id="cantidadPequesMobile">{childrenLot}</p>
          <button
            onClick={() => {
              setChildrenLot(childrenLot + 1);
              setIsShowAll(false);
            }}
            className="masPeques border-1 border-gray-400 bg-gray-200 text-gray-400 h-5 w-5 flex items-center justify-center rounded-sm duration-200 active:scale-90 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
