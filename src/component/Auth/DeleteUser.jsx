import React from "react";
import axios from "axios";
const DeleteUser = () => {

let config = {
  method: 'delete',
  url: 'https://api-nodejs-todolist.herokuapp.com/user/me',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZGQxM2JiMjIzZTEyMjY5NzMxMmEiLCJpYXQiOjE1NzQ2OTY1NzF9.5v32aulIG6tk91_oOehOexSqDst-YgYHGwD803ZSP_I'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}

export default DeleteUser;