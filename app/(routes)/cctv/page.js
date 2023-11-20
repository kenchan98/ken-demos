/*import Video from "@/app/_components/cctv";
import data from "@/data/cctv.json";

export default function CCTV() {
  console.log(data);
  return (
    <div className="flex flex-wrap">
      {data.cctv.map((url, index) => (
        <Video url={url} key={index} />
      ))}
    </div>
  );
}
*/

import CCTVs from "@/app/_components/cctvs";
import style from "./style.module.css";
export default function CCTVpage() {
  return (
    <div className="flex justify-center w-full">
      <CCTVs />
    </div>
  );
}
