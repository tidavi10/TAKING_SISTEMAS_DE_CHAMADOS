import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px;

    // Media query
    // Phone 
    @media (max-width: 576px) {
        margin: 5px;
    }
    
    // Tablete
    @media (min-width: 577px) and (max-width: 768px){

    }

    // Desktop 992px
    @media (min-width: 769px) and (max-width: 992px){

    }

    // Desktop 1200px
    @media (min-width: 1200px){

    }

`;

export const Header = styled.div`
    background: #dee2e6;
    width: 100%;
    height: 64px;
    border-radius: 10px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 1rem;

    @media (max-width: 576px) {
        span{
            font-size: 14px;
            justify-content: flex-end;
        }
    }
`;

export const HeaderContent = styled.div`
    background: #dee2e6;
    width: 50%;
    height: 64px;
    border-radius: 10px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 576px) {
        margin-bottom: 0px;
        width: 70%;
        justify-content: space-between;
    } 
`;

export const Button = styled.button`
    width: 50%;
    height: 90%;
    border: 2px solid #dee2e6;
    background: #eee;
    font-size: 18px;
    margin-left: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    :hover {
        background: #ced4da;
    }

    @media (max-width: 576px) {
        font-size: 14px;
        width: 60%;
    }

    @media (min-width: 577px) and (max-width: 768px){
        width: 60%;
    }

    @media (min-width: 769px) and (max-width: 992px){
        width: 60%;
    }
`;

export const ButtonExit = styled.button`
    width: 20%;
    height: 90%;
    border: 2px solid #dee2e6;
    background: #eee;
    font-size: 18px;
    margin-left: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    :hover {
        background: #ced4da;
    }

    @media (max-width: 576px) {
        font-size: 14px;
        width: 40%;
    }

    @media (min-width: 577px) and (max-width: 768px){
        width: 40%;
    }

    @media (min-width: 769px) and (max-width: 992px){
        width: 30%;
    }
`;

export const EditionArea = styled.div`
    width: 100%;
    height: 100%;
    padding: 32px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #eee;
    border-radius: 4px;

    // Phone 
    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 10px;
        border: none;
    }

    @media (min-width: 577px) and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 10px;
    }
`;

export const InputArea = styled.div`
    width: 40%;
    height: 100%;
    padding: 0px;
    justify-content: space-between;
    margin-right: 10px;
    
    label {
        align-items: auto;
        flex-direction: column;
        font-size: 1rem;
    }

    @media (max-width: 576px) {
        width: 100%;
        height: 100%;
        margin-right: 0px;

        label {
            text-align: center;
            display: inline-block;
            width: 100%;
        }
    }

    @media (min-width: 577px) and (max-width: 768px){
        width: 100%;
        height: 100%;
        margin-right: 0px;

        label {
            text-align: center;
            display: inline-block;
            width: 100%;
        }
    }
`;

export const FilterSelector = styled.div`
    width: 95%;
    height: 40px;
    display: flex;
    align-items: flex-start;
    margin-top: 15px;
 
    select {
        width: 200px;
    }
    
    option {
        font-family: sans-serif;
        font-size: 1rem;
    }

    @media (max-width: 576px) {
        width: 100%;
        height: 100%;
        align-items: center;

        select {
            margin: auto;
        }

        option {
            font-size: 14px;
        }
    }

    @media (min-width: 577px) and (max-width: 768px){
        width: 100%;
        height: 100%;
        align-items: center;

        select {
            margin: auto;
        }
    }
`;

export const Dropzone = styled.div`
    width: 300px;
    height: 50px;
    font-size: 1rem;
    border-radius: 4px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #dee2e6;
    background: #eee;

    .dropzone {
        align-items: center;
    }

    @media (max-width: 576px) {
        margin: auto;
        font-size: 1rem;
        margin-top: 10px;
        width: 50%;
        text-align: center;
    }

    @media (min-width: 577px) and (max-width: 768px){
        margin: auto;
        font-size: 1rem;
        margin-top: 10px;
        width: 40%;
        text-align: center;
    }

    @media (min-width: 769px) and (max-width: 992px){
        width: 70%;
    }
`;

export const EditionText = styled.div`
    width: 60%;
    margin-left: 10px;

    @media (max-width: 576px) {
        flex-direction: column;
        width: 100%;
        height: 100%;
        margin-left: 0px;
    }

    @media (min-width: 577px) and (max-width: 768px){
        flex-direction: column;
        width: 100%;
        height: 100%;
        margin-left: 0px;
    }
`;

export const EditionDescription = styled.div`
    display: flex;
    width: 100%;
    height: 42%;
    padding: 1rem 0;
    margin-bottom: 20px;

    textarea {
        margin-top: 8px;
        margin-right: 20px;
        width: 100%;
        height: 250px;
        resize: none;
        border: 2px solid #eee;
        padding: 0 4px;
        border-radius: 4px;
        background: #fff;
        font-size: 1rem;
        font-family: sans-serif;
        flex-direction: column;
    }
    
    textarea:focus {
        outline: none !important;
        border:1px solid #58a4b0;
        box-shadow: 0 0 5px #719ECE;
    }

    @media (max-width: 576px) {
        margin: auto;
        font-size: 1rem;
        margin-top: 10px;
        width: 100%;

        textarea {
            margin-right: 0px;
        }
    }

    @media (min-width: 577px) and (max-width: 768px){
        margin: auto;
        font-size: 1rem;
        margin-top: 10px;
        width: 100%;

        textarea {
            margin-right: 0px;
        }
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 100%;
    //padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonFinish = styled.button`
    width: 200px;
    height: 40px;
    font-size: 18px;
    border: 2px solid #dee2e6;
    background: #eee;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    transition: background-color 0.2s;

    :hover {
        background: #ced4da;
    }

    @media (max-width: 576px) {
        margin: auto;
        font-size: 1rem;
    }

    @media (min-width: 577px) and (max-width: 768px){
        margin: auto;
        margin-top: 20px;
    }
`;
