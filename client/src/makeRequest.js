import axios from "axios";

// const baseUrl = "https://social2-api.onrender.com";

const baseUrl = 'http://localhost:5000'




// const accessToken = JSON.parse(
//   JSON.parse(localStorage?.getItem("persist:root"))?.user
// );

// const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
// const actualUser = user?.user
// console.log(actualUser)



export const publicRequest = axios.create({
  baseURL: baseUrl,
});

export const privateRequest = axios.create({
  baseURL: baseUrl,
  // headers: {
  //   token: `Bearer ${actualUser?.token}`,
  // },
});
