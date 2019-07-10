import AsyncStorage from "@react-native-community/async-storage";

function setCookie(cb) {
  AsyncStorage.setItem(
    "@auth_cookie",
    "CfDJ8PAiCWgrxJNFm15BsuNayblMIhh0aOL6iCb7pySXQkCqR6AUIjM9Hf-5FVNFQOjv56S_hx0-JI-25cmKsfXFivcN3Fpe2H4UFxNXLLNGLzoTZ0_-34QWAsM3oW-vF6aG5XvBJbfDGqjDlPeLOhvfhM8zKd15R-QIpyO24M0rd5ng0-JJL7HkRKjmgCifAdcDCFWe-w6yJcFZphb7Keeus0JHZSBLfZKs1CGbx3csE7ChVH0phEY5FM4_xUroanAy2gcBTQV9mqtbljP-bdlh2oLXynsZJ9QqIwsKGtwVL_hPTMfmQ0rHhS-Ql6XUEcHbMbYk2cT6shbulyMQr4E9cLRB6e0nTHjV0mCnW5nQg9IMaf05DXeYaMjzkA008D3tvxAR6lvHdU9puqFf_aT3VV3wES5tBuYrmUTf1ldgUfPUJrMKY0iI0sRuj1x6iyfz5-iGd0ibb4NEAzOd4t7AOYKNqJaEfiab9ZHLdP5Cw8GfZiKhbBwaIHj0IKbgMKhNmE4F4MLKpwz7wqPS_lvWPjLW_wZIXcB7EEWbextQ-Gnv9WvVPYGoa6Ya-SUcQDFBiDvYINyyvUa4H9Mt_rqNDPq4HaEgw5SuLBtiel9HZlFA"
  ); //.catch(err => alert(`${err}`));
}

function getCookie(cb) {
  AsyncStorage.getItem("@auth_cookie").then(value => cb(value));
  //.catch(err => alert(err));
}

function authCookieValid(value) {
  fetch("http://178.63.162.108:8080/api/student/card/2019-12-02/3");
}

module.exports.getCookie = getCookie;
module.exports.setCookie = setCookie;
