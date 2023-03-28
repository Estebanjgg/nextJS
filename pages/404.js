import { useEffect } from 'react';
import Link from '../src/components/Link';

export default function Page404() {
useEffect(() => {
    const FAQ_API_URL = 'https://pokeapi.co/api/v2/pokemon/ditto'
        .then((respostaDoServidor) =>{
             return respostaDoServidor.json();
    })
    .then((resposta) => {
        console.log(resposta);
    })  
}, []);

    return (
        <div>
            <h1>Você se perdeu e caiu na página 404 :O</h1>
            <Link href="/">
                Ir para a home
            </Link>
        </div>
    )
}