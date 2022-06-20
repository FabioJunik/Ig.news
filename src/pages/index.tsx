import { GetServerSideProps } from "next";
import Head  from "../../node_modules/next/head";
import { SubscribeButton } from "../components/SubscribeButton/index";
import { stripe } from "../services/stripe";
import  styles from './home.module.scss';

interface HomeProps{
  produt
  :{
    priceId: string,
    amount: number
  }
}

export default function Home({produt}:HomeProps) {  
  console.log(produt);
  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, welcome</span>
          <h1>News about <br /> the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {produt.amount} month</span>
          </p>
          <SubscribeButton priceId={produt.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1LCnG9GnBmCXkShVVeFR9P0x');

  const produt = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }
  
  return{
    props:{
      produt
    }
  }
} 