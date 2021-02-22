import styled from 'styled-components';

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

export const EditionArea = styled.div`
    width: 90%;
    height: 50vh;
    border: 1px solid #eee;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
`;

export const InputArea = styled.div`
    width: 75%;
    
`;

export const EditionDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 0 10px;
`;

export const FilterSelector = styled.div`
    width: 25%;
    margin: 5px;
	text-align: center;
	font-size: 16px;
    align-content: center;
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
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 18px;
`;


