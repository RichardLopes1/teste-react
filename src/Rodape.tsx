import { FooterRodape } from "./styled";

export default function Rodape(){
    return(
        <FooterRodape>
            <div className="lojas_rodape">
                <h2>Lojas Físicas:</h2>
                <p>São Paulo</p>
            </div>
            <div className="canais_duvidas">
                <h2>Canais para Dúvidas:</h2>
                <ul>
                <li>Telefone: (11) 1234-5678</li>
                <li>Email: suporte@exemplo.com</li>
                <li>WhatsApp: (11) 99999-9999</li>
                </ul>
            </div>
            <div className="redes">
                <h2>Redes Sociais:</h2>
                <ul>
                <li><a href="" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
        </FooterRodape>
    )
}