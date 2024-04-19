import Ticker from '@/components/00Ticker';
import Header from '@/components/01Header';
import Cybercat from '@/components/02Cybercat';
import Mission from '@/components/03Mission';
import Tokenomics from '@/components/04Tokenomics';
import Partners from '@/components/05Partners';
import Roadmap from '@/components/06Roadmap';
import Footer from '@/components/07Footer';
import Head from 'next/head'

export default function Home() {
  return (
    <>
        <Head>
            <title>Cybercat</title>
            <meta httpEquiv="content-language" content="en" />
            <meta name="description" content="" />
            <link rel="shortcut icon" href="/img/favicon.png" />
        </Head>
        <Header />
        <Cybercat />
        <Ticker /> {/* Бегущая строка */}
        <Mission />
        <Tokenomics />
        <Ticker left turquoise /> {/* Бегущая строка */}
        <Partners />
        <Roadmap />
        <Ticker /> {/* Бегущая строка */}
        <Footer />
    </>
  );
}
