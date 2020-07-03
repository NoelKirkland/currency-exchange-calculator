import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CurrencyExchange } from '.src/currency-exchange.js';

$(document).ready(function () {
  $('form#exchange-form').submit(function(event) {
      event.preventDefault();
    let amountUSD = $("#ammount-usd").val();
    let currency = $("#country").val();
    $("#ammount-usd").val("");
    $("#country").val("");

    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await getExchangeByCurrency(currency);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $(".show-exchange-rate").text(`The exchange rate from USD to ${currency} is ${response.conversion_rates}`)
      }
    }

  });
});