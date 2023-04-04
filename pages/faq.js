import { useEffect,useState } from 'react';
import Link from '../src/components/Link';


export async function getStaticProps(context) {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/hermanitoPro/8580efcf6e8dbeaadee44be70d715150/raw/5452779b6530bdcf1343722cbb8e3b39bfa9a461/teste.json'
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) =>{
             return respostaDoServidor.json();
    })
    .then((resposta) => {
         return resposta;
      })  

    return {
      props: {
        qualquercosisa : 'que eu passar aqui',
        faq,
      }, // will be passed to the page component as props
    }
  }

export default function FAQPage({faq}) {
    console.log(faq);
//     const [faq, setFaq] = useState([]);
//   useEffect(() => {
//     }, []);

    return (
        <div>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>
            <ul>
                {faq.map(({ answer, question}) => (
                <li key={question}>
                    <article>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </article>

                </li>
                ))}
            </ul>
        </div>
    )
}
