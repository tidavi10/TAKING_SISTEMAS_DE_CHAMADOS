import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;
  width: 300px;
  justify-content: flex-end;
  svg {
    margin-left: 10px;
    cursor: pointer;
    color: #e57878;
    font-size: 25px;
  }
  strong {
    margin-left: 5px;
  }
  li {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    & + li {
      margin-top: 15px;
    }
  }

  @media (max-width: 576px) {
    margin: auto;
    font-size: 1rem;
    margin-top: 10px;
    width: 50%;
    text-align: center;
  }

  @media (min-width: 577px) and (max-width: 768px){
    margin: auto;
    font-size: 1rem;
    margin-top: 10px;
    width: 40%;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 992px){
    width: 70%;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
      margin-left: 5px;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;