import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import { uniqueId } from 'lodash';
import filesize from 'filesize';

import FileList from './components/FileList';
import Upload from './components/Upload';

import api, { listarPossiveisProblemas, cadastrarChamado } from '../../services/api';

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
} from '../TelaChamados/style';

export default function TelaChamados() {
    const history = useHistory();
    const [selectedOption, setSelectedOption] = useState(null);
    const [possiveisProblemas, setPossiveisProblemas] = useState([]);
    const [fileSelect, setFileSelect] = useState(null)

    useEffect(() => {
        listarPossiveisProblemas().then(d => d.data).then(d => {
            const ordenados = d.map(c => (
                {
                    label: c.tipoDoProblema, value: c.id
                }
            )).sort((a,b) => a.label > b.label ? 1 : a.label == 0 ? 0 : -1);
            setPossiveisProblemas(
                ordenados
            )
        })
    }, [possiveisProblemas.length])

    const [text, setText] = useState("");

    const handlerChangeText = ({ target: { value }}) => {
        setText(value);
    }

    
    const handlerUpload = files => {
        const fileToUpload = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
        }))[0]
        
        setFileSelect(fileToUpload)
        
    }

    const handleDeleteFile = () => {
        setFileSelect(null)
    }


    const handlerEnviar = () => {
        const formData = new FormData();
        formData.append('file', fileSelect);
        cadastrarChamado(text, formData).then(d => console.log(`Criado o item ${JSON.stringify(d)}`))
    }

    const gotoConsultaChamados = () => {
        history.push('/consulta-chamados')
    }

    function logout() {
        localStorage.clear();
        window.location.href= '/'
    }

    function problemaSelectedHandler(selectedOption) {
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
                        <Upload onUpload={handlerUpload} />
                        { !!fileSelect && (
                            <FileList files={[fileSelect]} onDelete={handleDeleteFile} />
                        ) }
                    </InputArea>
                    <EditionText>
                        <EditionDescription>
                            <textarea
                                value={text}
                                onChange={handlerChangeText}
                                alt="Descreva o problema"
                                placeholder="Descreva o problema"
                                maxLength={2000} >
                            </textarea>
                        </EditionDescription>
                    </EditionText>
                </EditionArea>
                <Footer>
                    <ButtonFinish type="submit" onClick={handlerEnviar}>
                        <span>Abrir chamado</span>
                    </ButtonFinish>
                </Footer>
            </Container>
        </Router>
    )
}