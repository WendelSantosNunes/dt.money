import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --green:#33cc95;
        --red: #e52e4d;
        --shape: #fff;
        --text-body: #969cb3;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        // Isso é para deixar mais fácil a utilização do site em dispositivo pequenos
        // Pq utilizar porcentagem ? É necessário para evitar fixa um tamanho
        @media(max-width: 1008px){
            font-size: 93.75%;// 15px
        }

        @media(max-width: 720px){
            font-size:87.5%;// 14px
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased; // Isso é para fontes ficarem mais vivas
    }

    // O input, textarea, button não importar os estilos do body
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;// Font regular
    }

    // Fonte semi-bold
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    
    // Vai ter opção habilitada e desabilitada
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);
        position: fixed;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        // Então, no maxímo 576px, mas no resto vai ser o resto da tela
        width: 100%;
        max-width: 576px;

        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background-color: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8)
        }
    }
`