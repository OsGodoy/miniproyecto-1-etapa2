import React from "react";

export default function Catalog() {
  return (
    <>
      <section className="flex justify-end px-6 gap-2">
        <button className="flex items-center justify-center">
          <p
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
          14 stays
        </p>
      </section>
    </>
  );
}
