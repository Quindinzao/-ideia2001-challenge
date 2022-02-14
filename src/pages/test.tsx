// External libraries
import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <section>
        <div style={{
          backgroundColor: 'red',
          width: 150,
          height: 150,
          position: 'relative'
        }}/>
        <div style={{
          backgroundColor: 'blue',
          width: 150,
          height: 150,
          // position: 'relative',
          marginTop: -130,
          marginLeft: 20
        }}/>
      </section>
    </>
  )
}

export default Home
