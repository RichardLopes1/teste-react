import styled from "styled-components";

export const HeaderCabec = styled.header`
    display: flex;
    align-items: center;
    background-color: #6b2293;
    width: 100%;
    height: 100px;

    nav{
        display: flex;
        margin-left: 66%;
        
    }

    h1{
        font-size: 3rem;
        
    }

    ul{
        display: flex;
        gap: 70px;
        justify-content: right;
   
        margin-left: auto;
    }

     li{
        list-style: none;
          margin-right: 15px;
        
    }

    .Img_usario{
        justify-content: center;
    }
    .Img_usario img{
        
        height: 40px;
    }

`

export const MainCorpo = styled.main`

    .pesquisa{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .pesquisa input{
        height: 30px;
        width: 700px;
    }

   
   

`
export const SectionBanner = styled.section`
   .banner img{
    width: 100%;
    height: 300px;
    object-fit: cover;

   }
   
`

export const SectionAnunc1 = styled.section`
    .container{
        display: flex;
        justify-content: center;
        gap: 5px;
        margin-top: 20px;
    }

    .card{
       
        width: 275px;
        height: 410px;
        padding-top: 20px;
        transition: 1s;
        border-radius:5px;
    }

    .card:hover{
        box-shadow: 0px 0px 6px rgba(0,0,0,0.4);
    }

    .card img{
        height: 280px;
        width: 275px;
        padding-left: 20px;
    }
   
   .card  p{
    text-align: justify;
;
   }

   .card .preco{
    text-align: justify;
    padding-top: 10px;
  
   }

   .card .pix{
    
    font-size: smaller;
    vertical-align: top;
   }

   .card .desconto{
    color: green;
    font-size: smaller;
   
   }

   .card .parcelado{
    text-align: justify;
    padding-top: 10px;
    font-size: smaller;
   }
`
export const SectionServic = styled.section`
     .secao-servico {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .secao-servico h4 {
            margin-top: 0;
            color: #333;
            text-align: center;
        }

        .servicos-lista {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .servicos-lista li {
            padding: 15px;
            border-bottom: 1px solid #ddd;
        }

        .servicos-lista li:last-child {
            border-bottom: none;
        }

        .servico-titulo{
            font-weight: bold;
            color: #555;
        }

        .servico-descricao {
            color: #777;
        }

`



export const FooterRodape = styled.footer`
   display: flex;
   gap: 10rem;
   justify-content: center;
    background-color: black;
    color: white;
 
   
   
    width: 100%;
    height: 100px;

    .lojas_rodape {
    text-align: center;
    justify-content: justify;
    
    
    }

    >.lojas_rodape p{
        color: #6b2293;
    }
    .canais_duvidas{
    text-align: center;
    justify-content: justify;      
    }

    .canais_duvidas ul li{
        list-style: none;
        color: #6b2293;
    }


    .redes ul li {
        list-style: none;
        text-align: center;
    }

    .redes ul li a{
        text-decoration: none;
        color: #6b2293;
    }
`




