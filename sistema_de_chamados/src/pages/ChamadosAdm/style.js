import styled from "styled-components";



export const Container = styled.div`
    // Extra large devices (large desktops, 1200px and up)
    /* @media (min-width: 1200px) {} */
    padding: 24px;

    @media (min-width: 576.1px) and (max-width: 767.9px) {
        padding: 16px 0;
    }

    @media (min-width: 768px) {
        padding: 20px 0;
    }

    @media (min-width: 992px) {}
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
        height: 36px;
        padding: 0 8px;
        font-size: 75%;
        font-weight: 500;
        border-radius: 8px;
        margin-bottom: 16px;
    }

    @media (min-width: 576.1px) {
        height: 40px;
        padding: 0 8px;
        font-size: 81.25%;
        font-weight: 500;
        border-radius: 8px;
        margin-bottom: 24px;
    }

    @media (min-width: 768px) {
        font-size: 87.5%;
        height: 56px;
        margin-bottom: 24px;
        padding: 0 8px;
        border-radius: 8px;
    }
`;

export const HeaderContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ButtonHeader = styled.button`
    width: 88px;
    height: 100%;
    font-weight: 600;
    border: 1px solid #dee2e6;

    @media (max-width: 576px) {
        font-size: 81.25%;
    }

    @media (min-width: 576.1px) {
        font-size: 87.5%;
    }


    @media (min-width: 768px) {
        font-size: 87.5%;
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
    align-items: center; 
    margin-bottom: 16px;
    border: 1px solid #eee;
    
    div:first-child {
        width: 10%;
        height: 100%;
        border-right: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:nth-child(2) {
        width: 70%;
        height: 100%;
        border-right: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:nth-child(3) {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 576px) {
        font-size: 75%;
        font-weight: 600;
        width: 85%;
        height: 32px;

        div:first-child {
            width: 16%;
        }

        div:nth-child(2) {
            width: 60%;
        }

        div:nth-child(3) {
            width: 24%;
        }
    }

    @media (min-width: 576.1px) {
        font-size: 81.25%;
        font-weight: 600;
        height: 36px;
        margin-bottom: 16px;

        div:first-child {
            width: 16%;
        }

        div:nth-child(2) {
            width: 60%;
        }

        div:nth-child(3) {
            width: 24%;
        }
    }
`;

export const CallItem = styled.div`
    width: 90%;
    height: 48px;
    background: #dee2e6;
    border-radius:10px;
    display: flex;
    align-items: center; 
    margin-bottom: 16px;
    border: 1px solid #eee;
    font-weight: 500;

    @media (max-width: 576px) {
        font-size: 81.25%;
        width: 85%;
        height: 32px;
        margin-bottom: 8px;
    }

    @media (min-width: 576.1px) {
        font-size: 87.5%;
        height: 40px;
        margin-bottom: 12px;
    }

    @media (min-width: 768px) {
        font-size: 87.5%;
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
        width: 16%;
    }

    @media (min-width: 576.1px) {
        width: 16%;
    }

    @media (min-width: 768px) {
        
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
        width: 60%;
    }

    @media (min-width: 576.1px) {
        width: 60%;
    }
`;

export const CallStatus = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        width: 24%;
    }

    @media (min-width: 576.1px) {
        width: 24%;
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

    @media (max-width: 576px) {
        width: 24px;
        height: 24px;
    }

    @media (min-width: 576.1px) {
        width: 28px;
        height: 28px;
    }
`;

export const InvisibleElement = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: -50px;
`;

