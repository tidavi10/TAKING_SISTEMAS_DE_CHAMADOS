import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 24px;
  background: #f8f9fa;
  max-width: 1100px;

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
    height: 40px;
    padding: 0 6px;
    border-radius: 6px;
    margin-bottom: 16px;

    > p {
      margin-right: 6px;
      font-size: 81.25%;
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

  @media (max-width: 576px) {
    margin-bottom: 0px;
    width: 70%;
  }
`;

export const ButtonHeader = styled.button`
  background: #219ebc;
  width: 100%;
  max-width: 200px;
  height: 90%;
  font-size: 18px;
  font-weight: 500;
  transition: background 0.2s;
  transition: border 0.2s;
  padding: 0 3px;
  color: #ffecd1;
  margin-left: 6px;

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

export const HeaderContentRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;

  > p {
    color: #ffecd1;
    margin-right: 16px;
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    margin-right: 6px;

    > p {
      font-size: 75%;
      margin-right: 10px;
      font-weight: 500;
    }
  }

  @media (min-width: 576.1px) {
    display: flex;
    align-items: center;
    margin-right: 6px;

    > p {
      font-size: 81.25%;
      margin-right: 10px;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 6px;

    > p {
      font-size: 87.5%;
      margin-right: 12px;
      font-weight: 500;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    display: flex;
    align-items: center;
    margin-right: 6px;

    > p {
      font-size: 93.75%;
      margin-right: 14px;
      font-weight: 500;
    }
  }
`;

export const Logout = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  display: flex;
  z-index: 1;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  > svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 576px) {
    width: 14px;
    height: 14px;

    > svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (min-width: 576.1px) {
    width: 16px;
    height: 16px;

    > svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;

    > svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 20px;
    height: 20px;

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Img = styled.img`
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
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid #eee;
  font-weight: 500;

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

  @media (max-width: 576px) {
    width: 100%;
    span:first-child {
      width: 12%;
    }

    span {
      font-size: 81.25%;
    }
  }
`;

export const CallItem = styled.div`
  width: 90%;
  height: 48px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid #eee;

  @media (max-width: 576px) {
    width: 100%;
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
    width: 12%;
    span {
      font-size: 81.25%;
    }
  }
`;

export const CallType = styled.div`
  width: 70%;
  height: 100%;
  border-right: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 8px;

  @media (max-width: 576px) {
    span {
      font-size: 81.25%;
    }
  }
`;

export const CallStatus = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    span {
      font-size: 81.25%;
    }
  }
`;

export const Page = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
