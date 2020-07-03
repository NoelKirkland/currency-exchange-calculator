import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getExchangeRates } from './../src/currency-exchange.js';



$(document).ready(function () {
  $('form#exchange-form').submit(function(event) {
      event.preventDefault();
    let amountUSD = $("#ammount-usd").val();
    console.log(amountUSD);
    let currency = $("#country").val();
    console.log(currency);
    $("#ammount-usd").val("");
    $("#country").val("");


    async function getElements(){
      const response = await getExchangeRates();
      if (response === false){
        $(".show-exchange-rate").text(`There was an error handling your request.`);
      } else {
        $(".show-exchange-rate").text("The exchange rate from USD to " + amountUSD + " is " + response.time_last_update_unix + currency);
      }
    }
    getElements()
  });
});