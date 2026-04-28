import { useMemo, useState } from "react";
import Domino from "./Domino";

export default function App() {
  type dominonumber = 1 | 2 | 3 | 4 | 5 | 6;
  const source = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
    [2, 2],
  ];

  function sortasc() {
    const newarray = [...content].sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    setContent(newarray);
  }
  function sortDesc() {
    const newarray = [...content].sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
    setContent(newarray);
  }
  function removeduplicate() {
    const newarray = content.filter((e: [number, number], index: number) => {
      let total = e[0] + e[1];
      const found = content.find(
        (v: [number, number], i: number) => v[0] + v[1] == total && i !== index,
      );
      console.log(found);
      return !found;
    });
    setContent(newarray);
  }
  function flipcard() {
    const newarray = content.map((e: [number, number]) => {
      let itema = e[0];
      let itemb = e[1];
      return [itemb, itema];
    });
    setContent(newarray);
  }
  function reset() {
    setContent(source);
  }
  function removenumber(target: number) {
    const newarray = content.filter(
      (e: [number, number]) => e[0] + e[1] !== target,
    );
    setContent(newarray);
  }

  const [content, setContent] = useState<any>(source);
  const [rmvnumber, setRmvnumber] = useState<number>(0);
  const double = useMemo(
    () => content.filter((e: [number, number]) => e[0] === e[1]).length,
    [content],
  );
  return (
    <div className="w-screen h-screen border flex  justify-center items-center ">
      <div className="flex flex-col  gap-2 items-center">
        <div className="flex gap-2 justify-center">
          {" "}
          {content.map((e: [dominonumber, dominonumber], id: number) => (
            <Domino key={id} number1={e[0]} number2={e[1]} />
          ))}
        </div>
        <div className="flex flex-col max-w-100 gap-1 ">
          <div className="border p-3 border-neutral-200 rounded-md flex justify-center bg-neutral-100">
            Double Numbers : {double}
          </div>
          <button
            onClick={sortasc}
            className="bg-blue-700 rounded-md text-white p-3 cursor-pointer hover:bg-blue-500"
          >
            <span>Sort (ASC)</span>
          </button>
          <button
            onClick={sortDesc}
            className="bg-blue-700 rounded-md text-white p-3 cursor-pointer hover:bg-blue-500"
          >
            <span>Sort (DESC)</span>
          </button>
          <button
            onClick={removeduplicate}
            className="bg-blue-700 rounded-md text-white p-3 cursor-pointer hover:bg-blue-500"
          >
            <span>Remove Duplicate</span>
          </button>
          <button
            onClick={flipcard}
            className="bg-blue-700 rounded-md text-white p-3 cursor-pointer hover:bg-blue-500"
          >
            <span>FlipCard</span>
          </button>
          <div className="flex gap-2">
            <input
              value={rmvnumber}
              onChange={(e) => setRmvnumber(Number(e.target.value))}
              type="number"
              className="border w-[60%] rounded-lg flex px-auto text-center"
            ></input>
            <button
              onClick={() => removenumber(rmvnumber)}
              onKeyDown={(e) => {
                if (e.key === "enter") removenumber(rmvnumber);
              }}
              className="bg-blue-700 flex-1  rounded-md text-white p-3 cursor-pointer hover:bg-blue-500"
            >
              <span>Remove Number</span>
            </button>
          </div>
          <button
            onClick={reset}
            className="bg-neutral-700 rounded-md text-white p-3 cursor-pointer hover:bg-blue-500"
          >
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}
