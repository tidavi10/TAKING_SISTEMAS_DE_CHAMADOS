import styled from "styled-components";

export const Container = styled.div`
    padding: 24px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
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

    > span {
        margin-right: 24px;
    }
`;

export const HeaderContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ButtonHeader = styled.button`
    width: 96px;
    height: 100%;
    border: 1px solid #dee2e6;
    background: #eee;
    margin-right: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
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
`;

export const CallCod = styled.div`
    width: 10%;
    height: 100%;
    border-right: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CallType = styled.div`
    width: 70%;
    height: 100%;
    border-right: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CallStatus = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const EditionArea = styled.div`
    width: 90%;
    height: 50vh;
    border: 1px solid #eee;
    padding: 0 24px;
    
    display: flex;
    justify-content: space-between;
`;

export const InputArea = styled.div`
    width: 40%;
    border: 1px solid #eee;
    height: 72%;

    
`;

export const EditionStatus = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EditionRunTime = styled.div``;

export const DescriptionArea = styled.div`
    width: 50%;
    border: 1px solid #eee;
    height: 72%;
`;
