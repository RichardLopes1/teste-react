import { MainCorpo } from "../styled";
import Anuncio1 from "./Anuncio1";
import Banner from "./Banner";
import Servicos from "./Servicos";


export default function Corpo() {
    return (
        <MainCorpo>
            <Banner />
            <div className="pesquisa">
          
                    <input type="text" placeholder="Busca na TEC"  />
            
            </div>
            <section className="Anuncios">
                <Anuncio1 />
            </section>
            <Servicos/>
        </MainCorpo>
    )


}