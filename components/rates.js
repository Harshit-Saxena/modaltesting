
import useSWR from "swr";

const fetchCurrencyRates = (currencyCode) =>
  fetch(`http://localhost:3001/api/rates?currencyCode=${currencyCode}`
  ).then((response) => response.json());

export default function Rates({ currencyCode }) {
  const { data, error } = useSWR(currencyCode, fetchCurrencyRates);

  if (error) return <div>No rates for you today</div>;
  if (!data) return <div>Loading... please wait till we fetch the rates</div>
  return (
        <div>
          <h2>Rates for {currencyCode}</h2>
          <ul>
            {Object.entries(data.rates).map(([code, rate]) => (
              <li key={code}>
                <strong>{code}:</strong> {rate}
              </li>
            ))}
          </ul>
        </div>
      );
}