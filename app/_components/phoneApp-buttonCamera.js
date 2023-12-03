export default function CameraButton(props) {
  return (
    <div
      className="w-20 h-20 bg-blue-800 p-4 m-4 rounded-full"
      onClick={() => {
        props.onPressed();
      }}
    ></div>
  );
}
