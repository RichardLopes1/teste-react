import { MainCorpo } from "../styled";
import Anuncio1 from "./Anuncio1";

import Banner from "./Banner";

export default function Corpo() {
    return (
        <MainCorpo>
            <Banner />
            <section className="Anuncios">
                <Anuncio1 />
             
            </section>

        </MainCorpo>
    )


}