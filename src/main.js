import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getExchangeRates, getConversion } from './../src/currency-exchange.js';

async function getElements(amountUSD, country){
  const response = await getExchangeRates();
  if (response === false){
    $(".show-exchange-rate").text(`There was an error handling your request.`);
  } else {
    if (country === "Japan"){
      $(".show-exchange-rate").text(`The exchange rate from USD to the Japanese Yen is ${response.conversion_rates.JPY}. This means that $${amountUSD} US Dollars would get you ¥${getConversion(amountUSD,response.conversion_rates.JPY)} Yen`);
    } else if (country === "England"){
      $(".show-exchange-rate").text(`The exchange rate from USD to the Great British Pound is ${response.conversion_rates.GBP}. This means that $${amountUSD} US Dollars would get you £${getConversion(amountUSD,response.conversion_rates.GBP)} Pounds`);
    }else if (country === "European Union"){
      $(".show-exchange-rate").text(`The exchange rate from USD to the Euro is ${response.conversion_rates.EUR}. This means that $${amountUSD} US Dollars would get you €${getConversion(amountUSD,response.conversion_rates.EUR)} Euros`);
    }
  }
}

$(document).ready(function () {
  $('form#exchange-form').submit(function(event) {
      event.preventDefault();
    let inputtedAmountUSD = $("#ammount-usd").val();
    $("#ammount-usd").val("");
    let inputtedCountry = $("#country").val();
    $("#country").val("");

    getElements(inputtedAmountUSD, inputtedCountry)
  });
});