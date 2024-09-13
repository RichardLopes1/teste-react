import { SectionAnunc1 } from "../styled";
import image from "../assets/iphone.jpg";
import imageSamsung from "../assets/samsung.jpg"
import imageMotorola from "../assets/motorola.jpg"

export default function Anuncio1() {
    return (
        <SectionAnunc1>
            <div className="container">
                <div className="card">
                    <img src={image} alt="" />
                    <p> iphone  12 Apple 64gb Branco Tela 6,1</p>
                    <p className="preco">R$ 2.699,10 <span className="pix">no pix</span></p>
                    <span className="desconto">(10% de desconto)</span>
                    <p className="parcelado">ou R$ 2.999,00 em 10x de 299,00 sem juros</p>
                </div>

                <div className="card">  
                    <img src={imageSamsung} alt="" />
                    <p>Smartphone Samsung Galaxy S23  </p>
                    <p className="preco">R$ 2.799,00 <span className="pix">no pix</span></p>
                    <span className="desconto">(10% de desconto)</span>
                    <p className="parcelado">ou R$ 3.110,00 em 10x de 311,00 sem juros</p>
                </div>

                <div className="card">  
                    <img src={imageMotorola} alt="" />
                    <p>Smartphone Motorola Moto g04s</p>
                    <p className="preco">R$ 636,35<span className="pix">no pix</span></p>
                    <span className="desconto">(10% de desconto)</span>
                    <p className="parcelado">ou R$ 749,00 em 6x de 124,83 sem juros</p>
                </div>
            </div>
        </SectionAnunc1>
    )
}