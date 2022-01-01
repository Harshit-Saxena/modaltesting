import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'

const currencies = ['USD', 'EUR', 'GBP', 'MXN', 'AUD', 'NOK'];
export default function Home() {
  return (
    <Layout>
        Home sweet home with
        <ul>
          {currencies.map((currency) => (
            <li key={currency}>
              <Link href={`/currency/[currencyCode]?currencyCode=${currency}`} as={`currency/${currency}`}><a>{currency}</a>
              </Link>
            </li>
          ))}
        </ul>
    </Layout>
  );
}