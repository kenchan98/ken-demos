export default function getDaily() {
  fetch(" https://api.daily.co/v1/", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  console.log();
}

//https://ken-demo.daily.co/ken-demo
