import { MainCorpo } from "../styled";
import Anuncio1 from "./Anuncio1";
import Anuncio2 from "./Anuncio2";
import Banner from "./Banner";

export default function Corpo() {
    return (
        <MainCorpo>
            <Banner />
            <section className="Anuncios">
                <Anuncio1 />
                <Anuncio2 />
            </section>

        </MainCorpo>
    )


}