import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container mx-auto mt-4'>
      <Head>
        <title>BTSBIMBEL</title>
        <meta name="description" content="Next.js + Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Saya halaman Utama</h1>
      </main>
      
    </div>
  )
}
