import image from "../assets/imagem-do-usuario-com-fundo-preto.png"
import { HeaderCabec } from "../styled"
export default function Cabecalho() {
    return (
        <HeaderCabec>
            <div className="logo"> <h1>TEC</h1></div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Dispositivos</li>
                </ul>
            </nav>
            <div className="Img_usario">
                <img src={image} alt="" />
            </div>
        </HeaderCabec>
    )
}