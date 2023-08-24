import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {

  const ReactTester = () => {
    return (
      <>
      <div>
        <h1>
          this is a react component playa
        </h1>
      </div>
      </>
    )
  }

  return (
    <div className="container">
      <Head>
        <title>WELCOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my houseyyyyy!" />
        <ReactTester />
        <p className="description">
          Get started by becoming the best
        </p>
      </main>

      <Footer />
    </div>
  )
}
