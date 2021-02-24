import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;

    // Media query
    // Phone 
    @media (max-width: 576px) {
        font-size: 14px;
        display: flex;
        justify-content: center;  
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

export const Title = styled.div`
    font-size: 30px;
    margin-bottom: 10px;
    padding: 20px;

    @media (max-width: 576px) {
        font-size: 20px;
        display: flex;
        justify-content: center;
        margin-bottom: 8px; 
    }
`;

export const InputDiv = styled.div`
    width: 100%;
    font-size: 15px;

    @media (max-width: 576px) {
        font-size: 12px;
    }
`;

export const FormCadastro = styled.div`
    margin-top: 15px;
    width: 400px;
    height: 100%; 
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #dee2e6; 
    border-radius: 10px;
    padding: 32px 24px;
    border: 1px solid #BBBBBB;

    @media (max-width: 576px) {
        width: 100%;
        height: 100%;
        align-items: center;
    }
 `;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 10px 10px;
    margin-top: 5px;
    border-bottom: 1px solid #807F7F;
`;

export const Button = styled.button`
    width: 50%;
    height: 30px;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    background-color: #adb5bd;

`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    margin-top: 10px;
    //transform: translate(0%, 50%);

    @media (max-width: 576px) {
        width: 60px;
        height: 60px;
    }
`;



