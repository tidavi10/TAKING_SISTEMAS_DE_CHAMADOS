import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`;

export const Title = styled.h1`

`;

export const Header = styled.div`
    width: 800px;
    height: 70px;
    background-color: #DEE2E6;
    border-radius:10px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    padding: 20px 20px; 
    border: 1px solid black;
`;

export const HeaderContent = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
`;

export const HeaderButton = styled.button`
    width:200px;
    height:40px;
    background-color: #ADB5BD;
    display: flex;
    border: 1px solid black;
    align-items:center;
    justify-content:center;
`;

export const Par = styled.p`
    padding: 20px 20px
`;

export const ControlList = styled.div`
    width: 800px;
    height: 70px;
    background-color: #DEE2E6;
    border-radius:10px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 16px;  
    border: 1px solid black;
    border-right: 1px solid black;
`;

export const Cod = styled.div`
    border-right: 1px solid black;
    height: 70px;
    width: 70px;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Desc = styled.div`

`;

export const Status = styled.div`
    border-left: 1px solid black;
    height: 70px;
    width: 150px;
    align-items: center;
    display: flex;
    justify-content: center;
`;


