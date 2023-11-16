export default function CarInfo(props) {
  const {
    plateNumber,
    make,
    colour,
    registerDate,
    vehicleTaxStatus,
    motStatus,
    motExpiryDate,
  } = props;
  return (
    <div className="text-white">
      <div className="bg-gray-200 rounded-lg">
        <div className="flex text-5xl text-black font-medium p-4 justify-center">
          {plateNumber}
        </div>
      </div>
      <div className="flex text-2xl p-2 w-full items-center place-content-center">
        {make} - {colour}
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col text-base font-extralight ">
          <div className="h-10 p-2">Register Date : </div>
          <div className="h-10 p-2">Tax Status : </div>
          <div className="h-10 p-2">MOT Status : </div>
          <div className="h-10 p-2">MOT Expiry Date : </div>
          <div className="h-10 p-2">Insurer : </div>
          <div className="h-10 p-2">Vehicle Owner :</div>
        </div>
        <div className="flex flex-col font-medium">
          <div className="h-10 text-lg p-2">{registerDate}</div>
          <div className="h-10 text-lg p-2">{vehicleTaxStatus}</div>
          <div className="h-10 text-lg p-2">{motStatus}</div>
          <div className="h-10 text-lg p-2">{motExpiryDate}</div>
          <div className="h-10 text-lg p-2">Aviva</div>
          <div className="h-10 text-lg p-2">John Doe</div>
        </div>
      </div>
    </div>
  );
}
