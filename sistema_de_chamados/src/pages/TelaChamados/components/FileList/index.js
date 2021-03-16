import React from "react";
import { ImBin } from "react-icons/im";

import { Container, FileInfo, Preview } from "./styles";

const FileList = ({ files, onDelete }) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}{" "}              
            </span>
          </div>
            <ImBin 
              button onClick={() => onDelete(uploadedFile.id)}>
            </ImBin>
        </FileInfo>
      </li>
    ))}
  </Container>
);

export default FileList;