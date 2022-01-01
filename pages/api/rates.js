// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res)
{
  const code = req.query.currencyCode
    const fetchCurrencyRates = await fetch(
      `http://api.exchangeratesapi.io/v1/latest?access_key=1764fe51825bd914da1b65de9dd250c9&symbols=${code}&format=1`
    )
  const data = await fetchCurrencyRates.json();
  res.status(200).json( data )
}