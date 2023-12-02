import PhoneAppHeader from "./header-app";

export default function Gallery(props) {
  return (
    <>
      {/* ====== TOP ====== */}
      <PhoneAppHeader
        title="Photos"
        buttonClose
        onClickCloseButton={props.onClickCloseButton}
      />
      {/* ====== MIDDLE ====== */}
      <div className="flex flex-wrap">
        {props.imgDataList.map((imgData, index) => (
          <img
            key={index}
            className="w-1/2 p-2 object-cover h-1/3"
            src={imgData}
          />
        ))}
      </div>
      <div className="h-1/6 w-full bg-black"></div>
    </>
  );
}
