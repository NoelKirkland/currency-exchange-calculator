export async function getExchangeRates() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        console.log(response.status, response.ok);
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
      } catch(error) {
        return false;
      }
  }

export function getConversion(amountUSD, exchangeRate){
  return amountUSD * exchangeRate;
}


