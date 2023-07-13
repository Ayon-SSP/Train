var express = require("express");
var router = express.Router();
const axios = require("axios");


const train_data_url = "http://20.244.56.144/train/trains";

const authorization_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODkyMzc0ODYsImNvbXBhbnlOYW1lIjoiRW5pdGlhdGUiLCJjbGllbnRJRCI6IjBlYjc3NmJhLWRhZGItNDU3MS05NzE0LTllNjcwZGRlOTQyMSIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxMjQyNzEifQ.OWbx6vjSmwdUiwuuqjEKLZDFGtYbRclYNNMJByCHD7c";
const headers = {
  Authorization: `Bearer ${authorization_token}`,
};

router.get("/", function (req, res, next) {

  axios
    .get(train_data_url, { headers })
    .then((response) => {
      // console.log(response);
      const response_data = response.data;
      console.log(response_data);
      res.json(response_data)
    })
    .catch((error) => {
      console.error("Error fetching train data:", error);
    });

});

module.exports = router;