import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const data = await request.json();
  const plateNum = data.plateNum;
  //
  const config = {
    method: "post",
    url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
    headers: {
      "x-api-key": process.env.DVLA_KEY,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ registrationNumber: plateNum }),
  };

  return axios(config)
    .then(function (response) {
      const data = JSON.stringify(response.data);
      return NextResponse.json({ data: data }, { status: 200 });
    })
    .catch(function (error) {
      console.log(error);
      return NextResponse.json({ message: error }, { status: 500 });
    });

  /*
  fetch(
    "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
    {
      method: "post",
      headers: {
        "x-api-key": process.env.DVLA_KEY,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ registrationNumber: plateNum }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return NextResponse.json({ data: data });
    });*/
}
