import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Select from "react-select";

import { uniqueId } from "lodash";
import filesize from "filesize";

import logo from "../../assets/logo.png";

import FileList from "./components/FileList";
import Upload from "./components/Upload";

import { listarPossiveisProblemas, cadastrarChamado } from "../../services/api";

import {
  Container,
  Header,
  HeaderContent,
  Button,
  EditionArea,
  InputArea,
  EditionDescription,
  FilterSelector,
  Footer,
  ButtonFinish,
  EditionText,
  ButtonExit,
  Img,
} from "../TelaChamados/style";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import { Loader } from "../../components/Loader";

export default function TelaChamados() {
  const { usuario } = useAuth();
  //console.log(usuario)
  const history = useHistory();

  const gotoConsultaChamados = () => {
    history.push("/consulta-chamados");
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [possiveisProblemas, setPossiveisProblemas] = useState([]);
  const [fileSelect, setFileSelect] = useState(null);

  const { addToast } = useToast();

  useEffect(() => {
    let isSubscribed = true;
    listarPossiveisProblemas()
      .then((d) => d.data)
      .then((d) => {
        if (isSubscribed) {
          const ordenados = d
            .map((c) => ({
              label: c.tipoDoProblema,
              value: c.id,
            }))
            .sort((a, b) => (a.label > b.label ? 1 : a.label == 0 ? 0 : -1));
          setPossiveisProblemas(ordenados);
        }
      });
      return () => isSubscribed = false;
  }, [possiveisProblemas.length]);

  const [text, setText] = useState("");

  const handleChangeText = ({ target: { value } }) => {
    setText(value);
  };

  const handleUpload = (files) => {
    const fileToUpload = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))[0];
    setFileSelect(fileToUpload);
  };

  const handleDeleteFile = () => {
    setFileSelect(null);
  };

  const handleEnviar = async (data) => {
    try {
      const formData = new FormData();
      if (fileSelect) {
        formData.append("file", fileSelect.file);
      }
      await cadastrarChamado(usuario.id, selectedOption.value, text, formData);
      history.push("/consulta-chamados");
      addToast({
        type: "success",
        title: "Chamado aberto com sucesso!",
      });
    } catch (error) {
      addToast({
        type: "error",
        title:
          "Não foi possível realizar essa operação. Por favor tente novamente mais tarde.",
      });
    }
  };

  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  function problemaSelectedHandle(selectedOption) {
    setSelectedOption(selectedOption);
  }

  return (
    <Router>
      <Container>
        <Header>
          <HeaderContent>
            <Img src={logo} />
            <Button type="submit" onClick={gotoConsultaChamados}>
              <p>Consultar chamado</p>
            </Button>
            <ButtonExit type="submit" onClick={logout}>
              <p>Sair</p>
            </ButtonExit>
          </HeaderContent>
          <p>{usuario.name ? usuario.name : usuario.email}</p>
        </Header>
        <EditionArea>
          <InputArea>
            <label htmlFor="tipoProblema">Selecione o problema: </label>
            <FilterSelector>
              <Select
                value={selectedOption}
                options={possiveisProblemas}
                onChange={problemaSelectedHandle}
                placeholder="Selecione"
              />
            </FilterSelector>
            <Upload onUpload={handleUpload} />
            {!!fileSelect && (
              <FileList files={[fileSelect]} onDelete={handleDeleteFile} />
            )}
          </InputArea>
          <EditionText>
            <EditionDescription>
              <textarea
                className="text"
                value={text}
                onChange={handleChangeText}
                alt="Descreva o problema"
                placeholder="Descreva o problema"
                maxLength={2000}
              ></textarea>
            </EditionDescription>
          </EditionText>
        </EditionArea>
        <Footer>
          <ButtonFinish
            type="submit"
            onClick={() => {
              handleEnviar();
            }}
          >
            <span>Abrir chamado</span>
          </ButtonFinish>
        </Footer>
      </Container>
    </Router>
  );
}
