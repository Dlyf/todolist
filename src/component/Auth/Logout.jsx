import React from "react";
import axios from "axios";
// email, password
const Logout = () => {

    var config = {
        method: 'post',
        url: 'https://api-nodejs-todolist.herokuapp.com/user/logout',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZGQxM2JiMjIzZTEyMjY5NzMxMmEiLCJpYXQiOjE1NzQ2OTEwNDl9.R4sJr3wnoiG_HwKT3to40u6Z1b_CiClH66sJZRRj9bA'
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    return (
        <form>
            <button type="submit">Logout</button>
        </form>
    )
}
export default Logout;