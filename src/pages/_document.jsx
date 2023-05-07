import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_API_URL}/images/logoPNG.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
