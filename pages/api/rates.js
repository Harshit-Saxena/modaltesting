// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function getApiKey() {
  const dayOfTheMonth = (new Date()).getDate()
  const apiKeyRotation = dayOfTheMonth < 10 ? 0 : dayOfTheMonth < 20 ? 1 : 2;
      const apiKeys = {
        0: process.env.EXCHANGE_RATES_API_KEY_1 ,
        1: 'xxxx-0',
        2: 'xxxx-0'
      }
 return  apiKeys[apiKeyRotation]
}
export default async function handler(req, res)
{
  const code = req.query.currencyCode
  const apiKey = getApiKey();
  const fetchCurrencyRates = await fetch(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&symbols=${code}&format=1`
    )
  const data = await fetchCurrencyRates.json();
  res.status(200).json( data )
}