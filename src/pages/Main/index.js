import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import api from '../../services/api';

import React, { Component } from 'react';
class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false
    };

    //carregar os dados do localStorage
    componentDidMount() {
        const repositories = localStorage.getItem('repositories');
        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) })
        }
    }
    //salvar os dados no localStorage
    componentDidUpdate(prevProps, prevState) {
        const { repositories } = this.state;
        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories))
        }
    }

    handleInputChange = e => {
        this.setState({
            newRepo: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        const { newRepo, repositories } = this.state;
        const response = await api.get(`repos/${newRepo}`);

        const data = {
            name: response.data.full_name
        }

        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false
        });
    }

    render() {
        const { newRepo, loading, repositories } = this.state;

        return (

            <Container>
                <h1>
                    <FaGithubAlt /> Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Adicionar repositório" value={newRepo} onChange={this.handleInputChange} />

                    <SubmitButton loading={loading}>
                        {loading ? <FaSpinner color="#fff" size={14} /> : <FaPlus color="#fff" size={14} />}
                    </SubmitButton>
                </Form>

                <List>
                    {repositories.map(repository => (
                        <li key={repository.name}>
                            <span>{repository.name}</span>
                            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
                        </li>
                    ))}
                </List>
            </Container>
        )
    }
}

export default Main;
