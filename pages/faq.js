// faq.js
import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

export async function getStaticProps() {
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Roda SOMENTE em build time')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/hermanitoPro/8580efcf6e8dbeaadee44be70d715150/raw/5452779b6530bdcf1343722cbb8e3b39bfa9a461/teste.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
      props: {
          qualquercoisa: 'que eu passar aqui',
          faq,
      },
    };
}  