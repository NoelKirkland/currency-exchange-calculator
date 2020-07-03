export async function getExchangeRates() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USA`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
      } catch(error) {
        return false;
      }
  }

export function getConversion(ammountUSD, exchangeRate){
  return ammountUSD * exchangeRate
}

export function getConversion(ammountUSD, exchangeRate){
  return ammountUSD * exchangeRate
}

