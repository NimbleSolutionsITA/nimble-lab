import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/keyboard-button/main.scss"
import "../styles/global.css"
import localFont from 'next/font/local'

const futura = localFont({
    src: [
        {
            path: '../fonts/FuturaLT-Light.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../fonts/FuturaLT-Book.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/FuturaLT.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/FuturaLT-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/FuturaLT-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../fonts/FuturaLT-Heavy.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: "--futura-font"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <title>Nimble Lab</title>
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
        </Head>
        <main className={`${futura.variable} font-futura`}>
            <Component {...pageProps} />
        </main>
    </>
  )
}
