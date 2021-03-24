import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.div`
    padding: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #f8f9fa;
    margin: 0 auto;
    max-width: 1100px;

    @media (max-width: 576px) {
        padding: 12px;
    }

    @media (min-width: 576.1px) {
        padding: 16px;
    }

    @media (min-width: 768px) {
        padding: 20px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        padding: 24px;
    }
`;

export const Header = styled.div`
    background: #219ebc;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 4px -2px #989898;
    width: 100%;
    height: 64px;
    border-radius: 10px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 1rem;

    > p {
        color: #ffecd1;
        margin-right: 24px;
        margin-bottom: 0;
    }

    @media (max-width: 576px) {
        height: 36px;
        border-radius: 6px;
        padding: 0 6px;
        margin-bottom: 16px;

        > p {
            margin-right: 6px;
            font-size: 75%;
            font-weight: 500;
        }
    }

    @media (min-width: 576.1px) {
        height: 48px;
        border-radius: 6px;
        padding: 0 6px;
        margin-bottom: 20px;

        > p {
            margin-right: 6px;
            font-size: 81.25%;
            font-weight: 500;
        }
    }

    @media (min-width: 768px) {
        height: 56px;
        border-radius: 8px;
        padding: 0 8px;
        margin-bottom: 24px;

        > p {
            margin-right: 6px;
            font-size: 87.5%;
            font-weight: 500;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        height: 60px;
        border-radius: 10px;
        padding: 0 10px;
        margin-bottom: 28px;

        > p {
            margin-right: 6px;
            font-size: 93.75%;
            font-weight: 500;
        }
    }
`;

export const HeaderContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Img =styled.img`
    width: 34px;
    height: 34px;
    margin-bottom: 26px;
    margin-left: 4px;

    @media (max-width: 576px) {
        width: 22px;
        height: 22px;
        margin-bottom: 16px;
    }

    @media (min-width: 576.1px) {
        width: 28px;
        height: 28px;
        margin-bottom: 24px;
    }

    @media (min-width: 768px) {
        width: 30px;
        height: 30px;
        margin-bottom: 24px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 32px;
        height: 32px;
        margin-bottom: 26px;
    }
`;

export const ButtonHeader = styled.button`
    background: #219ebc;
    width: 92px;
    height: 90%;
    font-weight: 500;
    transition: background 0.2s;
    transition: border 0.2s;
    padding: 0 3px;
    color: #ffecd1;
    margin-left: 6px;

    > p {
        margin-bottom: 0;
    }

    &:hover {
        border: 1px solid #dee2e6;
        border-radius: 6px;
    }

    @media (max-width: 576px) {
        font-size: 81.25%;
        font-weight: 500;
    }

    @media (min-width: 576.1px) {
        font-size: 81.25%;
        font-weight: 500;
    }

    @media (min-width: 768px) {
        font-size: 87.5%;
        font-weight: 500;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        font-size: 93.75%;
        font-weight: 500;
    }
`;


export const CallsBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LegendCalls = styled.div`
    width: 90%;
    height: 48px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center; 
    margin-bottom: 16px;
    border: 2px solid #eee;

    > p {
        margin-bottom: 0;
    }    
    
    p:first-child {
        width: 10%;
        height: 100%;
        border-right: 2px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p:nth-child(2) {
        width: 70%;
        height: 100%;
        border-right: 2px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p:nth-child(3) {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 576px) {
        font-size: 75%;
        font-weight: 500;
        width: 85%;
        height: 32px;
        margin-bottom: 12px;
        border-radius: 6px;

        p:first-child {
            width: 16%;
        }

        p:nth-child(2) {
            width: 60%;
        }

        p:nth-child(3) {
            width: 24%;
        }
    }

    @media (min-width: 576.1px) {
        font-size: 81.25%;
        font-weight: 500;
        height: 40px;
        margin-bottom: 14px;

        p:first-child {
            width: 16%;
        }

        p:nth-child(2) {
            width: 60%;
        }

        p:nth-child(3) {
            width: 24%;
        }
    }

    @media (min-width: 768px) {
        font-size: 87.5%;
        font-weight: 500;
        height: 44px;
        margin-bottom: 16px;

        p:first-child {
            width: 10%;
        }

        p:nth-child(2) {
            width: 70%;
        }

        p:nth-child(3) {
            width: 20%;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        font-size: 93.75%;
        font-weight: 500;
        height: 44px;
        margin-bottom: 18px;
    }
`;

export const CallItem = styled.div`
    width: 90%;
    height: 48px;
    background: #fff;
    border-radius:10px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    border: 2px solid #eee;

    > p {
        margin-bottom: 0;
    }

    @media (max-width: 576px) {
        font-size: 75%;
        width: 85%;
        height: 32px;
        border-radius: 6px;
    }

    @media (min-width: 576.1px) {
        font-size: 81.25%;
        height: 40px;
    }

    @media (min-width: 768px) {
        font-size: 87.5%;
        height: 44px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        font-size: 93.75%;
        height: 44px;
    }
`;

export const CallCod = styled.div`
    width: 10%;
    height: 100%;
    border-right: 2px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;

    > p {
        margin-bottom: 0;
    }

    @media (max-width: 576px) {
        width: 16%;
    }

    @media (min-width: 576.1px) {
        width: 16%;
    }

    @media (min-width: 768px) {
        width: 10%;
    }
`;

export const CallType = styled.div`
    width: 70%;
    height: 100%;
    border-right: 2px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
        margin-bottom: 0;
    }

    @media (max-width: 576px) {
        width: 60%;
    }

    @media (min-width: 576.1px) {
        width: 60%;
    }

    @media (min-width: 768px) {
        width: 70%;
    }
`;

export const CallStatus = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
        margin-bottom: 0;
    }

    @media (max-width: 576px) {
        width: 24%;
    }

    @media (min-width: 576.1px) {
        width: 24%;
    }

    @media (min-width: 768px) {
        width: 20%;
    }
`;

export const EditionArea = styled.div`
    width: 90%;
    height: 40vh;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 576px) {
        font-size: 75%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 576.1px) {
        font-size: 81.25%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
    }

    @media (min-width: 768px) {
        font-size: 87.5%;
        height: 54vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        font-size: 93.75%;
    }
`;

export const InputArea = styled.div`
    width: 42%;
    height: 72%;

    @media (max-width: 576px) {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 576.1px) {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 768px) {
        width: 40%;
        height: 72%;
    }
`;

export const EditionStatus = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 42%;
    padding: 16px 0;
    margin-bottom: 20px;

    label {
        margin-bottom: 8px;
    }

    select {
        border: 2px solid #eee;
        background: #fff;
        border-radius: 4px;
        height: 24px;
    }

    @media (max-width: 576px) {
        width: 100%;
        margin-bottom: 12px;
        
        label {
            margin-bottom: 6px;
        }
    }

    @media (min-width: 576.1px) {
        width: 100%;
        margin-bottom: 12px;
        
        label {
            margin-bottom: 6px;
        }    
    }

    @media (min-width: 768px) {
        width: 100%;
        height: 24%;
        padding: 0;

        label {
            margin-bottom: 8px;
        }

        select {
            border: 1px solid #eee;
            background: #fff;
            border-radius: 4px;
            height: 24px;
            font-size: 87.5%;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 100%;
        height: 24%;
        padding: 0;

        label {
            margin-bottom: 6px;
        }

        select {
            font-size: 93.75%;
            height: 24px;
        }
    }
`;

export const EditionRunTime = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;

    input {
        width: 100%;
        height: 24px;
        border: 2px solid #eee;
        padding: 2px 4px;
        border-radius: 4px;
        background: #fff;
    }

    @media (max-width: 576px) {
        width: 100%;
        
        div {
            width: 100%;
            padding: 3px 4px;
            margin-top: 6px;
        }
    }

    @media (min-width: 576.1px) {
        width: 100%;
        
        div {
            width: 100%;
            padding: 3px 4px;
            margin-top: 6px;
        }
    }
`;

export const DescriptionArea = styled.div`
    width: 50%;
    height: 72%;
    padding: 16px 0;
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 8px;
    }


    div {
        margin-top: 8px;
        width: 100%;
        height: 80%;
        resize: none;
        border: 2px solid #eee;
        padding: 0 4px;
        border-radius: 4px;
        background: #fff; 
    }

    textarea {
        width: 100%;
        height: 100%;
        resize: none;
        background: #fff;   
    }

    @media (max-width: 576px) {
        width: 100%;
        padding: 0;

        label {
            margin-bottom: 0;
        }
    }

    @media (min-width: 576.1px) {
        width: 100%;
        padding: 0;

        label {
            margin-bottom: 0;
        }
    }

    @media (min-width: 768px) {
        width: 54%;
    }
`;

export const ButtonArea = styled.div`
    width: 90%;
    height: 40px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        width: 100%;
        height: auto;
        align-items: center;
        flex-direction: column;
    }

    @media (min-width: 576.1px) {
        width: 100%;
        height: auto;
        align-items: center;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        width: 90%;
        height: 40px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 90%;
        height: 40px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }
`;

export const SubmitButton = styled.button`
    width: 70%;
    height: 100%;
    border-radius: 4px;
    background: #ffb703;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;

    p {
            margin-bottom: 0;
    }
    
    &:hover {
        /* background: #4cd62b; */
        background: ${darken(0.04, '#ffb703')};
    }

    p {
        font-size: 87.5%;
        font-weight: 500;
        color: #333;
    }

    @media (max-width: 576px) {
        width: 90%;
        height: 32px;

        

        & + button {
            margin-top: 8px;
        }
    }

    @media (min-width: 576.1px) {
        width: 90%;
        height: 32px;

        & + button {
            margin-top: 8px;
        }
    }

    @media (min-width: 768px) {
        width: 70%;
        height: 100%;
        border-radius: 4px;
        
        & + button {
            margin-top: 0;
        }

        p {
            font-size: 87.5%;
            font-weight: 500;
            color: #333;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        > p {
            font-size: 93.75%;
        }   
    }
`;
