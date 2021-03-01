import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.div`
    padding: 24px;

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
    background: #dee2e6;
    width: 100%;
    height: 64px;
    border-radius: 10px;
    padding: 0 10px;
    font-weight: 500;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
        margin-right: 24px;
    }

    @media (max-width: 576px) {
        height: 36px;
        padding: 0 6px;
        border-radius: 6px;
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

export const ButtonHeader = styled.button`
    width: 88px;
    height: 100%;
    font-weight: 500;
    border: 1px solid #dee2e6;
    transition: background 0.2s;
    transition: border 0.2s;

    &:hover {
        background: #dee2e6;
        border: 3px solid #efefef;
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
    
    p:first-child {
        width: 10%;
        height: 100%;
        border-right: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p:nth-child(2) {
        width: 70%;
        height: 100%;
        border-right: 1px solid #eee;
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
        height: 36px;
        margin-bottom: 16px;

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
        margin-bottom: 18px;

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
        margin-bottom: 20px;
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

    @media (max-width: 576px) {
        font-size: 75%;
        width: 85%;
        height: 32px;
        margin-bottom: 4px;
        border-radius: 6px;
    }

    @media (min-width: 576.1px) {
        font-size: 81.25%;
        height: 40px;
        margin-bottom: 6px;
    }

    @media (min-width: 768px) {
        font-size: 87.5%;
        height: 44px;
        margin-bottom: 8px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        font-size: 93.75%;
        height: 44px;
        margin-bottom: 10px;
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
        width: 10%;
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

export const CallEditButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #eee;
    margin-right: -50%;
    margin-left: 10px;
    transition: background 0.2s;
    transition: border 0.2s;

    &:hover {
        background: ${darken(0.02, '#dee2e6')};
        border: 2px solid #efefef;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: #666;
    }

    @media (max-width: 576px) {
        width: 24px;
        height: 24px;
        margin-left: 4px;
    }

    @media (min-width: 576.1px) {
        width: 28px;
        height: 28px;
        margin-left: 6px;
    }

    @media (min-width: 768px) and (max-width: 991.9) {
        width: 28px;
        height: 28px;
        margin-left: 8px;
    }
`;

export const InvisibleElement = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: -50px;
`;

