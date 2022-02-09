import React from "react";
const jwtToken = JSON.parse(sessionStorage.getItem("jwtToken"));

const isLogin = (
    jwtToken === null || jwtToken === undefined || jwtToken === ""
      ? false : true
)
console.log(isLogin);
export default isLogin;