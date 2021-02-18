import styled from 'styled-components';

export const Header = styled.div`
    height: 100%;
    flex-direction: column;
    background: #DEE2E6;
    align-items: center;
`;

export const Title = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    padding: 32px 24px;
`;

export const Button = styled.button`
    width: 15%;
    background-color: #C4C4C4;
    border-radius: 10px;
    color: black;
    padding: 15px 32px;
    text-align: center;
    justify-content: center;
    font-size: 16px;
    display: flex;
    margin: 5px;
`;

export const Input = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 24px;
    border-radius: 5px;
    margin-top: 5px;
`;

export const Form = styled.div`
    height: 400px;
    width: 600px;
    margin-bottom: 30px;
    display: flex;
    border: 1px solid #ccc;
    align-content: flex-start;
`;
   

export const Div = styled.div`
    flex: 1;
    margin: 5px;
    padding: 0 10px;
    background: #84a59d;
    text-align: center;
    font-size: 1.5em;
`;

export const FilterSelector = styled.div`
    justify-content: flex-end;
    margin: 5px;
	padding: 0 10px;
	background: tomato;
	text-align: center;
	font-size: 1.5em;
`;
