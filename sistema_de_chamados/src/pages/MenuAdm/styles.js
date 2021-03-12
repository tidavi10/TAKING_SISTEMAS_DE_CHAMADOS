import styled from "styled-components";

export const Container = styled.div`
    padding: 24px;
    background: #f8f9fa;

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
    color: #fff;
    margin-left: 10px;

    > p {
        margin-bottom: 0;
    }

    &:hover {
        border: 1px solid #dee2e6;
        border-radius: 6px;
    }

    @media (max-width: 576px) {
        font-size: 81.25%;
    }

    @media (min-width: 576.1px) {
        font-size: 81.25%;
    }

    @media (min-width: 768px) {
        font-size: 87.5%;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        font-size: 93.75%;
    }
`;

