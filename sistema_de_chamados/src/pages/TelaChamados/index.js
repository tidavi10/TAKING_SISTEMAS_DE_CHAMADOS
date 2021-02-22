import React, { useCallback } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
    Header,
    Button,
    EditionArea,
    InputArea,
    EditionDescription,
    FilterSelector,
    Footer,
    ButtonFinish,
} from '../TelaChamados/style';

function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive?
                <p>Solte os arquivos aqui...</p> :
                <p>Arraste e solte alguns arquivos aqui, ou clique para selecionar arquivos</p>
            }
        </div>
    )
}

export default function TelaChamados() {
    return (
        <Router>
            <Header>
                <Button>
                   <span>Consultar chamado</span>
                </Button>
            </Header>
            <FilterSelector>
                <label for="tipoProblema">Tipo de problema </label>
                <select name="tipoProblema" id="tipoProblema">
                    <option value="criacaoEmail">Criação de e-mail</option>
                    <option value="reset">Resetar de senha</option>
                    <option value="problemaMaquina">Problema na máquina</option>                    
                    <option value="acessoBitrix">Liberar acesso ao Bitrix</option>
                </select>
            </FilterSelector>
            <EditionArea>
                <InputArea>
                    <EditionDescription>
                        <label>Descreva o problema:</label>
                        <textarea></textarea>
                    </EditionDescription>
                </InputArea>
            </EditionArea>
            <Footer>
                <MyDropzone />
                
                <ButtonFinish>
                    Cadastrar chamado
                </ButtonFinish>
            </Footer>
        </Router>
    )
}
