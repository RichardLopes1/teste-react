import styled from "styled-components";

export const HeaderCabec = styled.header`
    display: flex;
    align-items: center;
    background-color: #D2E0FB;
    width: 100%;
    height: 100px;

    nav{
        display: flex;
        margin-left: 60%;
        
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
    

    .Anuncios{
        display: flex;
        gap: 35px;
        justify-content: center;
    }

`
export const SectionBanner = styled.section`
   .banner img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-top: 5px;
   }
   
`

export const SectionAnunc1 = styled.section`
    .container{
        display: flex;
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




