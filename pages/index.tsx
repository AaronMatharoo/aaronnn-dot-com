import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'

export default function Home() {

  const ReactTester = () => {
    return (
      <>
      <div>
        <h1>
          this is a react component playaaa
        </h1>
      </div>
      </>
    )
  }

  return (
    <div>
      {/* <Head> */}
        {/* <title>WELCOME</title> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* </Head> */}

      {/* <main> */}
        <p>Welcome to my houseyyyyy!" </p>
        <ReactTester />
        <p>
          Get started by becoming the best
        </p>
      {/* </main> */}

      {/* <Footer /> */}
    </div>
  )
}
