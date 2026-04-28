type DominoValue = 1 | 2 | 3 | 4 | 5 | 6

type dominoprop = {
    number1: DominoValue,
    number2: DominoValue,
    total?: number
}

const dominobeads = {
  1:"⚀",
  2:"⚁",
  3:"⚂",
  4:"⚃",
  5:"⚄",
  6:"⚅",
}

export default function Domino({number1 , number2}:dominoprop) {
    const total = number1+number2
  return (
<div className="flex flex-col items-center gap-2">
  <div className="rounded-full bg-neutral-200 text-neutral-400 p-2 w-10 text-center">{total}</div>
      <div className=" flex flex-col text-7xl text-red-700 border-black">
        {" "}
        <span>{dominobeads[number1]}</span>
        <span className="-translate-y-9">{dominobeads[number2]}</span>
        {/* {total} */}
      </div>
</div>

  );
}
