import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getData from '../lib/getData';

export default function Home({ dataTable }) {

  console.log(dataTable);

  return (
    <div className={styles.container}>
      <Head>
        <title>Airtable App</title>
        <meta name="description" content="Airtable with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.table_container}>
          <ul className={styles.table_card}>
            {dataTable.map((item) => (
              <li key={item.id} className={styles.table}>
                <h2>{item.fields.Name}</h2>
                <img src={item.fields.Images[0].thumbnails.large.url} alt={item.fields.filename} />
                <p>{item.fields.Description}</p>
                <h5>{item.fields.UnitCost}$</h5>
                <div className={styles.stock}>
                  {item.fields.InStock === true ? <p>In stock</p> : <p>Out of stock</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const dataTable = await getData();

  return {
    props: {
      dataTable,
      revalidate: 1
    }
  }
}