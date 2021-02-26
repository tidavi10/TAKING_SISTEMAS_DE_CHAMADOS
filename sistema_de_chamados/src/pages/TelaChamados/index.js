import React, { useCallback } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
    Container,
    Header,
    Button,
    EditionArea,
    InputArea,
    EditionDescription,
    FilterSelector,
    Footer,
    ButtonFinish,
    Dropzone,
    EditionText,
} from '../TelaChamados/style';

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

export default function TelaChamados() {
    const history = useHistory();

    const gotoConsultaChamados = () => {
        history.push('/consulta-chamados')
    }
    return (
        <Router>
            <Container>
                <Header>
                    <Button type="submit" onClick={gotoConsultaChamados}>
                        <span>Consultar chamado</span>
                    </Button>
                </Header>
                <EditionArea>
                    <InputArea>
                        <div className="label">
                            <label for="tipoProblema">Selecione o problema: </label>
                        </div>
                        <FilterSelector>
                            <select name="tipoProblema" id="tipoProblema">
                                <option value="criacaoEmail">Criar e-mail</option>
                                <option value="acessoBitrix">Liberar acesso ao Bitrix</option>
                                <option value="reset">Resetar senha</option>
                                <option value="problemaMaquina">Problema na máquina</option>
                                <option value="outros">Outros</option>
                            </select>
                        </FilterSelector>
                        <Dropzone>
                            <MyDropzone />
                        </Dropzone>
                    </InputArea>
                    <EditionText>
                        <EditionDescription>
                            <textarea
                                placeholder="Descreva o problema"
                                maxLength={2000} >
                            </textarea>
                        </EditionDescription>
                    </EditionText>
                </EditionArea>
                <Footer>
                    <ButtonFinish>
                        Abrir chamado
                    </ButtonFinish>
                </Footer>
            </Container>
        </Router>
    )
}
