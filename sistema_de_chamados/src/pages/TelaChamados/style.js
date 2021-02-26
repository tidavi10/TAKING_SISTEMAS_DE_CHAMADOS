import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px 0;
    display: flex;
    align-items: center;
    flex-direction: column;

    // Media query
    // Phone 
    @media (max-width: 576px) {
        
    }
    
    // Tablete
    @media (min-width: 768px){

    }

    // Desktop 992px
    @media (min-width: 992px){

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
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 576px) {
        margin-bottom: 0px;
    }    
`;

export const Button = styled.button`
    width: 20%;
    height: 90%;
    border: 2px solid #dee2e6;
    background: #eee;
    font-size: 18px;
    margin-left: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        width: auto;
        font-size: 16px;
        margin: auto;
    }    
`;

export const EditionArea = styled.div`
    width: 100%;
    height: 100%;
    padding: 32px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 2px solid #eee;
    border-radius: 4px;

    // Phone 
    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 10px;
    }
    
    // Tablete
    @media (min-width: 768px){
        
    }
`;

export const InputArea = styled.div`
    width: 40%;
    height: 100%;
    padding: 0px;
    justify-content: space-between;
    margin-right: 10px;
    //border: 2px solid black;

    label {
        align-items: auto;
        flex-direction: column;
    }

    @media (max-width: 576px) {
        width: 100%;
        height: 100%;
        margin-right: 0px;

        .label {
            margin: auto;
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
        font-size: 15px;
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
`;

export const Dropzone = styled.div`
    width: 300px;
    height: 50px;
    font-size: 16px;
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
        font-size: 16px;
        margin-top: 10px;
        width: 50%;
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
`;

export const EditionDescription = styled.div`
    display: flex;
    width: 100%;
    height: 42%;
    padding: 16px 0;
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
        font-size: 16px;
        font-family: sans-serif;
        flex-direction: column;
    }
    
    textarea:focus {
        outline: none !important;
        border:1px solid blue;
        box-shadow: 0 0 5px #719ECE;
    }

    @media (max-width: 576px) {
        margin: auto;
        font-size: 16px;
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
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonFinish = styled.div`
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

    @media (max-width: 576px) {
        margin: auto;
        font-size: 16px;
    }
`;
