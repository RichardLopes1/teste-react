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
    margin-top: 30px;
   }
   
`

export const SectionAnunc1 = styled.section`
    margin-top: 20px;
    background-color: red;
    width: 350px;
    height: 200px;
   
`

export const SectionAnunc2 = styled.section`
    margin-top: 20px;
    background-color: red;
    width: 350px;
    height: 200px;
   
`


