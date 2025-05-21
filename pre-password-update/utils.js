const express = require('express');
const axios = require('axios');
const https = require('https');

const router = express.Router();

router.post("/password", async (req,res) => {
    const sucessResponse = {actionStatus: "SUCCESS"}
    const failedResponse = {actionStatus: "FAIL"}
    const userDetails = await getUserData(req.body.event.user.id);
    const passwordValidation = await validatePassword(req.body.event.user.updatingCredential.value, userDetails);

    if(passwordValidation){
        res.json(sucessResponse);
    } else {
        res.json(failedResponse);
    }

});


async function getUserData(userID) {
    const url = 'https://localhost:9443/scim2/Users/' + userID;

    try {
      const response = await axios.get(url, {
        headers: {
          'Authorization': 'Basic YWRtaW46YWRtaW4=',
          'Content-Type': 'application/json'
        },
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
      });
  
      const results = {
        userName: response.data.userName,
        givenName: response.data.name?.givenName,
        familyName: response.data.name?.familyName
      };
  
      return results;
  
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return null;
    }
}


async function validatePassword(password, userData) {

    if(password === userData.userName) {
        console.log("Password equals to username");
        return false;
    } if(password === userData.givenName){
        console.log("Password equals to firstname");
        return false;
    } if(password === userData.familyName){
        console.log("Password equals to lastname");
        return false;
    }

    if(password != userData.userName && password != userData.givenName && password != userData.familyName){
        console.log("Password policy validated is passed.")
        return true;
    }
}

module.exports = router;