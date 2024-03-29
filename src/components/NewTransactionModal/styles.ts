import styled from'styled-components';
import { darken, transparentize} from 'polished'
export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-title)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {    
        width: 100%;
        padding: 0 1.5rem;    
        height: 4rem;
        background-color: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`

    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius:  0.25rem;

    background-color: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]):'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    // Vamos deixar escuro a bordar do button
    // Vamos baixar um pacote polished(yarn add polished)
    // Esse pacote vai adicionar esse funcionalidades
    &:hover{
        border-color: ${darken(0.1,'#d7d7d7')};
    }

    img{
        height: 20px;
        width: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }

`