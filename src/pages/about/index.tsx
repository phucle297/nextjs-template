import type { NextPage } from 'next'
// import TikTok from 'components/homepage/tiktok/tiktok'
// import Type from 'components/homepage/type/type'
// import NavBar from 'components/layout/navbar'
// import Footer from 'components/layout/footer'
// import Banner from 'components/about/banner/banner'
// import Explore from 'components/about/explore/explore'
// import Types from 'components/about/types/types'
import Head from 'next/head'

const ProductPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Malto</title>
        <meta name="description" content="Malto website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar />
      <Banner />
      <Types />
      <Explore />
      <Type />
      <TikTok />
      <Footer /> */}
    </div>
  )
}
export default ProductPage
