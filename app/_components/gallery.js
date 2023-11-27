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
      <div className="flex w-full flex-wrap ">
        {props.imgDataList.map((imgData, index) => (
          <img className="w-1/2 p-2 object-cover" src={imgData} />
        ))}
      </div>
    </div>
  );
}
