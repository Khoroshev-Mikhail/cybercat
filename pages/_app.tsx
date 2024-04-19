import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import localFont from 'next/font/local'

const COOLVETICA_FONT = localFont({ src: '../public/fonts/coolvetica_regular.woff2' })
export const COOLVETICA = COOLVETICA_FONT.className
const DRUK_CYR_FONT = localFont({ src: '../public/fonts/druk_cyr_super_italic.woff' }) //Найти woff2
export const DRUK_CYR = DRUK_CYR_FONT.className

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
      AOS.init({
          once: true
      })
  }, [])
  
  return (
        <main>
            <Component {...pageProps} />
        </main>
  )
}