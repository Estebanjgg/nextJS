import Head from 'next/head'
import GlobalStyle from "../src/theme/GlobalStyle";


export default function MyApp({ Component, pageProps }) {
    return ( 
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Roboto+Slab:wght@100;300&family=Sono:wght@200;500&display=swap" rel="stylesheet"/>
        </Head>
        <GlobalStyle/>
        <Component {...pageProps} />

                </>
        
        
        )
    
  
  }



