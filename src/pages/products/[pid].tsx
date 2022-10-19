import type { NextPage } from 'next'
import { useRouter } from 'next/router'
// import TikTok from 'components/homepage/tiktok/tiktok'
// import Type from 'components/homepage/type/type'
// import Banner from 'components/product/banner/banner'
// import NavBar from 'components/layout/navbar'
// import Footer from 'components/layout/footer'
// import About from 'components/product/about/about'
import Head from 'next/head'

const ProductPage: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query
  let icon = -1
  if (pid === '1') {
    icon = 4
  }
  if (pid === '2') {
    icon = 3
  }
  if (pid === '3') {
    icon = 2
  }
  return (
    <div>
      <Head>
        <title>Malto</title>
        <meta name="description" content="Malto website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar />
      <Banner />
      <About />
      <Type type={pid} />
      <TikTok icon={icon} />
      <Footer /> */}
    </div>
  )
}
export default ProductPage
