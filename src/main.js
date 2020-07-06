import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getExchangeRates, getConversion } from './../src/currency-exchange.js';

async function getElements(amountUSD, country){
  const response = await getExchangeRates();
  if (response === false){
    $(".show-error").text(`There was an error handling your request.`);
  } else {
    if ((amountUSD === "0") || (amountUSD === "")){
      $(".show-exchange-rate").text(`Please enter an amount.`);
    } else if (country === "Japan"){
      $(".show-exchange-rate").text(`The exchange rate from USD to the Japanese Yen is ${response.conversion_rates.JPY}. This means that $${amountUSD} US Dollars would get you ¥${getConversion(amountUSD,response.conversion_rates.JPY).toFixed(2)} Yen`);
    } else if (country === "England"){
      $(".show-exchange-rate").text(`The exchange rate from USD to the Great British Pound is ${response.conversion_rates.GBP}. This means that $${amountUSD} US Dollars would get you £${getConversion(amountUSD,response.conversion_rates.GBP).toFixed(2)} Pounds`);
    } else if (country === "European Union"){
      $(".show-exchange-rate").text(`The exchange rate from USD to the Euro is ${response.conversion_rates.EUR}. This means that $${amountUSD} US Dollars would get you €${getConversion(amountUSD,response.conversion_rates.EUR).toFixed(2)} Euros`);
    } else if (country === "Mexico"){
      $(".show-exchange-rate").text(`The exchange rate from USD to the Mexican Peso is ${response.conversion_rates.MXN}. This means that $${amountUSD} US Dollars would get you Mex$${getConversion(amountUSD,response.conversion_rates.MXN).toFixed(2)} Pesos`);
    } else if (country === "Switzerland"){
      $(".show-exchange-rate").text(`The exchange rate from USD to the Swiss Franc is ${response.conversion_rates.CHF}. This means that $${amountUSD} US Dollars would get you SFr.${getConversion(amountUSD,response.conversion_rates.CHF).toFixed(2)} Francs`);
    } else if (country === ""){
      $(".show-exchange-rate").text(`Please select a country.`);
    } else if ((country !== "Japan") && (country !== "England") && (country !== "European Union") && (country !== "Mexico") && (country !== "Switzerland")){
      $(".show-error").text(`We're sorry, that currency is not currently supported. Please select from one of the countries in the drop-down menu.`);
    } else {
      $(".show-error").text(`We're sorry, we are not sure what happened. Please refresh the page and try again`); 
    }
  }
}

$(document).ready(function () {
  $('form#exchange-form').submit(function(event) {
      event.preventDefault();
    let inputtedAmountUSD = $("#amount-usd").val();
    let inputtedCountry = $("#country").val();
    $("#country").val("");

    getElements(inputtedAmountUSD, inputtedCountry);
  });
});