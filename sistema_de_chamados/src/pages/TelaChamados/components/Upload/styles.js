import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  border: 2px dashed #ddd;
  border-radius: 4px;
  width: 300px;
  height: 50px;
  margin-top: 30px;
  font-size: 1rem;
  font-weight: 200;
  cursor: pointer;
  background: #fff;
  transition: height 0.2s ease;
  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};

  @media (max-width: 576px) {
    margin: auto;
    margin-top: 10px;
    width: 50%;
    text-align: center;
    font-size: 81.25%;
  }

  @media (min-width: 577px) and (max-width: 768px){
    margin: auto;
    margin-top: 10px;
    width: 40%;
    text-align: center;
    font-size: 81.25%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 93.75%;
  }

  @media (min-width: 769px) and (max-width: 992px){
    width: 70%;
  }
  
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5"
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  font-size: 1rem; 
  font-weight: 500;

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