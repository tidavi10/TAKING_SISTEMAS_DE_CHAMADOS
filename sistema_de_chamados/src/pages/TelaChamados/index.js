import React, { useCallback, useEffect, useState } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Select from 'react-select';
import {listarPossiveisProblemas} from '../../services/api'
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
    Dropzone,
    EditionText,
    ButtonExit,
    CloudUpStyle,
} from '../TelaChamados/style';

import { BiCloudUpload } from "react-icons/bi";


function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Solte os arquivos aqui...</p> :
                    <p>Adicionar arquivos</p>
            }
        </div>
    )
}

const options = [
    { value: 'criacaoEmail', label: 'Criar e-mail'},
    { value: 'acessoBitrix', label: 'Liberar acesso ao Bitrix'},
    { value: 'reset', label: 'Resetar senha'},
    { value: 'problemaMaquina', label: 'Problema na máquina'},
    { value: 'outros', label: 'Outros'},
];

export default function TelaChamados() {
    const history = useHistory();
    const [selectedOption, setSelectedOption] = useState(null);
    const [possiveisProblemas, setPossiveisProblemas] = useState([]);

    useEffect(() => {
        // Efetuar a chamada no endpoint para listar os possiveis Problemas.
        // Quando receber o resultado dos possiveis problemas transformar 
        // os mesmos no padrao que a lib react-selector precisa
        // { label: 'TextoExemplo', value: 'identificadorParaOItem'}
        // Tendo o item transformado pode se definir o mesmo utilizando o set UseState setPossiveisProblemas
    }, [possiveisProblemas.length])

    const gotoConsultaChamados = () => {
        history.push('/consulta-chamados')
    }

    function logout() {
        localStorage.clear();
        window.location.href= '/'
    }

    function alertFinish() {
        alert("Chamado cadastrado com sucesso!");
    }


    function problemaSelectedHandler(selectedOption) {
        console.log(selectedOption)
        setSelectedOption(selectedOption)
    }

    return (
        <Router>
            <Container>
                <Header>
                    <HeaderContent>
                        <Button type="submit" onClick={gotoConsultaChamados}>
                            <span>Consultar chamado</span>
                        </Button>
                        <ButtonExit type="submit" onClick={logout}>
                            <span>Sair</span>
                        </ButtonExit>
                    </HeaderContent>
                    <span>username</span>
                </Header>
                <EditionArea>
                    <InputArea>
                            <label for="tipoProblema">Selecione o problema: </label>
                        <FilterSelector>
                            <Select
                                value={selectedOption}
                                options={possiveisProblemas}
                                onChange={problemaSelectedHandler}
                                placeholder="Selecione"/>
                        </FilterSelector>
                        <Dropzone>
                            <CloudUpStyle>
                                <BiCloudUpload />
                            </CloudUpStyle>
                            <MyDropzone />
                        </Dropzone>
                    </InputArea>
                    <EditionText>
                        <EditionDescription>
                            <textarea
                                alt="Descreva o problema"
                                placeholder="Descreva o problema"
                                maxLength={2000} >
                            </textarea>
                        </EditionDescription>
                    </EditionText>
                </EditionArea>
                <Footer>
                    <ButtonFinish type="submit" onClick={alertFinish}>
                        <span>Abir chamado</span>
                    </ButtonFinish>
                </Footer>
            </Container>
        </Router>
    )
}
