import PhoneAppHeader from "./header-app";

export default function Gallery(props) {
  return (
    <div className="flex flex-col w-full h-full bg-gray-800">
      {/* ====== TOP ====== */}
      <PhoneAppHeader
        title="Photos"
        onClickBackButton={props.onClickBackButton}
      />
      {/* ====== MIDDLE ====== */}
      <div className="flex w-full min-h-screen h-fit flex-wrap ">
        <div className="flex flex-wrap">
          {props.imgDataList.map((imgData, index) => (
            <img
              key={index}
              className="w-1/2 p-2 object-cover h-1/3"
              src={imgData}
            />
          ))}
        </div>
        <div className="grow"></div>
      </div>
    </div>
  );
}
