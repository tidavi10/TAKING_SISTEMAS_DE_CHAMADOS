import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;  
    }
    
    @media (min-width: 700px){

}

    @media (min-width: 1100px){

}
`;
/*@media (max-width: 800px) and (min-width: 720px){
}*/

export const Title = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    padding: 32px 24px;
`;

export const InputDiv = styled.div`
     width: 100%;
     font-size: 17px;
`;

export const Form = styled.div`
    margin-top: 50px;
    width: 400px;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #dee2e6; 
    border-radius: 10px;
    padding: 32px 24px;

    @media (max-width: 600px) {
        width: 100%;
        heigth: 100%;
        align-items: center;

    }

 `;



export const Input = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 24px;
    border-radius: 5px;
    padding: 10px 10px;
    margin-top: 5px;
`;

export const Button = styled.button`
    width: 50%;
    height: 30px;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    background-color: #adb5bd;

`;

export const Image = styled.img`
    width: 80px;
    height: 80px;
    transform: translate(0%, 50%);
`;



