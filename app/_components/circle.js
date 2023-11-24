export default function Circle(props) {
  let filled = props.solid ? "bg-blue-600" : "";
  return (
    <div
      className={`w-4 h-4 m-2 ${filled} border-2 border-blue-600 rounded-full`}
    ></div>
  );
}
