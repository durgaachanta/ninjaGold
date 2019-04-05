const express = require('express');
const app = express();
const axios = require('axios');

const bodyParser = require('body-Parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '../../ninjagold_app/build/'));





//post history to MockApi
app.post('/postHistory', (req, resp) => {
  axios.post('http://5c983a812e1ca60014d60d43.mockapi.io/ninjacoins', req.body)
    .then((response) => {
      // fetch data from Mock api as a response
      axios.get('http://5c983a812e1ca60014d60d43.mockapi.io/ninjacoins')
        .then((r) => {
          //calculate total coins
          var totalCoins = 0;
          for (var i = 0; i < r.data.length; i++) {
            totalCoins = totalCoins + r.data[i].coinsEarned;
          }
          resp.json({
            data: r.data,
            totalCoins: totalCoins,
          });
        })
        .catch((error) => {
          console.log(error);
        })
    })
    .catch((error) => {
      console.log(error);
    });

});

//fetch data from MockAPI
app.get('/fetchgoldcoinsstatus', (req, res) => {
  axios.get('http://5c983a812e1ca60014d60d43.mockapi.io/ninjacoins')
    .then((response) => {
      //calculate totalcoins
      var totalCoins = 0;
      for (var i = 0; i < response.data.length; i++) {
        totalCoins = totalCoins + response.data[i].coinsEarned;
      }
      res.json({
        data: response.data,
        totalCoins: totalCoins,
      });

    })
    .catch((error) => {
      console.log(error);
    });

})

app.listen(1337);