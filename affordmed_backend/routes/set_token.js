var express = require("express");
var router = express.Router();
const axios = require("axios");

const apiUrl = "http://20.244.56.144/train/trains";
let authorization_token = "";
let token_expire_by = 0;

const renew_token = async () => {
  const authApiUrl = "http://20.244.56.144/train/auth";
  const api_cred = {
    companyName: "Enitiate",
    clientID: "0eb776ba-dadb-4571-9714-9e670dde9421",
    clientSecret: "ThaTJmRVAClOEaCE",
    ownerName: "Ayon",
    ownerEmail: "ayon.ssp.2@gmail.com",
    rollNo: "124271"
  };

  try {
    const response = await axios.post(authApiUrl, api_cred);
    authorization_token = response.data.access_token;
    token_expire_by = response.data.expires_in;
    setTimeout(renew_token, (token_expire_by - Math.floor(Date.now() / 1000)) * 1000);
  } catch (error) {
    console.error("Error generating access token:", error);
  }
};


router.get("/", async function (req, res) {

  if (!authorization_token || Math.floor(Date.now() / 1000) >= token_expire_by) {
    await renew_token();
  }

  const headers = {
    Authorization: `Bearer ${authorization_token}`,
  };

  try {
    const response = await axios.get(apiUrl, { headers });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching train data:", error);
    res.status(500).json({ error: "Error fetching train data" });
  }
});

module.exports = router;