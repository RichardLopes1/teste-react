import { SectionServic } from "../styled";

export default function Servicos(){
    return(
        <SectionServic>
           <div className="secao-servico">
        <h2>Serviços da Loja de Eletrônicos e Celulares</h2>
        <ul className="servicos-lista">
            <li>
                <div className="servico-titulo">Venda de Celulares</div>
                <div className="servico-descricao">Oferecemos uma ampla gama de smartphones das principais marcas, com modelos para todos os perfis e orçamentos.</div>
            </li>
            <li>
                <div className="servico-titulo">Venda de Eletrônicos</div>
                <div className="servico-descricao">Temos uma variedade de eletrônicos, incluindo TVs, computadores, tablets e muito mais.</div>
            </li>
            <li>
                <div className="servico-titulo">Assistência Técnica para Celulares</div>
                <div className="servico-descricao">Realizamos reparos em smartphones, desde trocas de tela até consertos de hardware e software.</div>
            </li>
            <li>
                <div className="servico-titulo">Instalação de Acessórios</div>
                <div className="servico-descricao">Instalamos e configuramos acessórios como capinhas, películas de proteção, e suportes para dispositivos móveis.</div>
            </li>
            <li>
                <div className="servico-titulo">Consultoria em Compra de Eletrônicos</div>
                <div className="servico-descricao">Oferecemos consultoria para ajudar você a escolher o melhor eletrônico para suas necessidades e orçamento.</div>
            </li>
        </ul>
    </div>
        </SectionServic>
    )
}