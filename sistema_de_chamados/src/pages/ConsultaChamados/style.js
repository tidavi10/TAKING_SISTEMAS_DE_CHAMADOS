import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px;

    // Media query
    // Phone 
    @media (max-width: 576px) {
        margin: 15px;
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
        width: 60%;
        justify-content: space-between;
    } 
`;

export const ButtonHeader = styled.button`
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

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 90%;

    @media (max-width: 576px) {
        font-size: 14px;
    }
`;

export const CallsBox = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LegendCalls = styled.div`
    width: 90%;
    height: 48px;
    background: #dee2e6;
    border-radius:10px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 16px;
    border: 1px solid #eee;
    
    span:first-child {
        width: 10%;
        height: 100%;
        border-right: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span:nth-child(2) {
        width: 70%;
        height: 100%;
        border-right: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span:nth-child(3) {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 576px) {
        width: 100%;
        span:first-child {
            width: 12%;
        }

        span {
            font-size: 14px;
        }
    }
`;

export const CallItem = styled.div`
    width: 90%;
    height: 48px;
    background: #dee2e6;
    border-radius:10px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 16px;
    border: 1px solid #eee;

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const CallCod = styled.div`
    width: 10%;
    height: 100%;
    border-right: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        width: 12%;
        span {
            font-size: 14px;            
        }
    }
`;

export const CallType = styled.div`
    width: 70%;
    height: 100%;
    border-right: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        span {
            font-size: 14px;            
        }
    }
`;

export const CallStatus = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        span {
            font-size: 14px;            
        }
    }
`;

export const CallEditButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #eee;
    margin-right: -50px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: #666;
    }
`;

