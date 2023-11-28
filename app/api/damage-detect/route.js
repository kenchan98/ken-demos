import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const data = await request.json();

  return axios({
    method: "POST",
    url: "https://outline.roboflow.com/damage_severity/1",
    params: {
      api_key: "zbiv06vujzjR0Zk07QJT",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ken-demo-d95fe.appspot.com/o/images%2Fdamage-1.jpg?alt=media&token=041ac154-4df3-4fd6-b240-20171139c89f",
    },
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
