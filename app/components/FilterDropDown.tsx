import React from "react";

export default function FilterDropDown({ filter, setFilter }: any) {
  return (
    <div className="absolute h-48 w-72 max-w-4xl top-10 sm:top-12 right-4  mx-auto flex flex-col gap-6 bg-red-900 rounded px-6 py-6 text-sm shadow-xl ">
      <div>
        <p className="text-center text-white font-bold mb-2">
          Set Min Size: Mi
        </p>

        <input
          className="text-black w-full rounded text-center remove-arrow h-1/2 font-semibold   "
          type="number"
          value={filter.min ? filter.min : undefined}
          onChange={(e) =>
            setFilter((prev: any) => ({ ...prev, min: e.target.value }))
          }
          placeholder="Set Min size in mi"
          style={{}}
        />
      </div>

      <div>
        <p className="text-center text-white font-bold mb-2">
          Set Max Size: Mi
        </p>

        <input
          className="text-black w-full rounded text-center remove-arrow  h-1/2 font-semibold "
          type="number"
          value={filter.max ? filter.max : undefined}
          onChange={(e) =>
            setFilter((prev: any) => ({ ...prev, max: e.target.value }))
          }
          placeholder="Set Max size in mi "
          style={{}}
        />
      </div>
    </div>
  );
}
