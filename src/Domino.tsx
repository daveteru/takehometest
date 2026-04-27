type dominoprop = {
    number1:number,
    number2:number,
    total?:number
}

export default function Domino({number1 , number2}:dominoprop) {
    const total = number1+number2
  return (
    <div className="border flex flex-col p-5 rounded-md bg-amber-100 gap-3">
      {" "}
      <span>{number1 ?? 0}</span>
      <hr></hr>
      <span>{number2 ?? 0}</span>
      {/* {total} */}
    </div>
  );
}
