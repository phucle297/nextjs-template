import type { NextPage } from 'next'
import Head from 'next/head'
import useTrans from 'hooks/useTrans'
import styles from '../styles/Home.module.css'
// import Banner from 'components/homepage/banner/banner'
// import Team from 'components/homepage/team/team'
// import Type from 'components/homepage/type/type'
// import About from 'components/homepage/about/about'
// import Product from 'components/homepage/product/product'
// import TikTok from 'components/homepage/tiktok/tiktok'

// import NavBar from 'components/layout/navbar'
// import Footer from 'components/layout/footer'
const Home: NextPage = () => {
  const locale = useTrans()
  return (
    <div className={styles.container}>
      <Head>
        <title>Malto</title>
        <meta name="description" content="Malto website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar /> */}
      <main className={styles.main}>
        {/* <Banner />
        <Team />
        <Type />
        <About />
        <Product />
        <TikTok icon={1} /> */}
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default Home
