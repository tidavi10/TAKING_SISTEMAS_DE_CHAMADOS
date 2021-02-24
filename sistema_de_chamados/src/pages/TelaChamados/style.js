import styled from 'styled-components';

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

export const Button = styled.button`
    width: 20%;
    height: 100%;
    border: 1px solid #dee2e6;
    background: #eee;
    font-size: 18px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    padding: 32px 24px;
`;

export const FilterSelector = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    align-items: flex-start;
 
    label {
        margin-bottom: 8px;
    }

    select {
        margin-left: 8px;

    }
`;

export const EditionArea = styled.div`
    width: 90%;
    height: 50vh;
    //border: 1px solid #eee;
    padding: 0 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const InputArea = styled.div`
    width: 100%;
    height: 100%;    
`;

export const EditionDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 42%;
    padding: 16px 0;
    margin-bottom: 20px;

    label {
        margin-bottom: 8px;
    }

    textarea {
        margin-top: 8px;
        width: 100%;
        height: 80%;
        resize: none;
        border: 1px solid #eee;
        padding: 0 4px;
        border-radius: 4px;
        background: #fff;   
    }
`;

export const Dropzone = styled.div`
    /* border: 1px solid #eee;
    padding: 16px 0;
    display: flex;

    width: 100%;
    height: 40%; */
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 20%;

`;

export const Footer = styled.div`
    margin-top: 20px;

`;

export const ButtonFinish = styled.div`
    width: 20%;
    height: 100%;
    border: 1px solid #dee2e6;
    background: #eee;
    margin-right: 4px;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    margin-top: 20px;
    font-size: 18px;
    align-content: flex-start;
`;


