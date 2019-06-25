import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import theme from '../../assets/styles/theme';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemonDetails } from '../../actions/pokemonActions';

import PokemonItem from '../PokemonItem/PokemonItem';
import Info from './Info/Info';

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0,0,0,.3);
    opacity: ${(props) => props.show ? '1' : '0'};
    visibility: ${(props) => props.show ? 'visible' : 'hidden'};
    transition: opacity .2s ease-in .2s;
`;

const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 90%;
    max-width: 924px;
    height: 80%;
    overflow: auto;
    background: ${theme.yellow};
    border-radius: 5px;
    z-index: 999;
    padding: 15px 20px 15px 30px;

    ::-webkit-scrollbar-track {
        border-radius: 5px;
        background-color: ${theme.yellow};
    }

    ::-webkit-scrollbar {
        border-radius: 5px;
        width: 10px;
        background-color: ${theme.yellow};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: ${theme.red};
    }
`;

const CloseButton = styled(Link)`
    background: none;
    border: none;
    width: 35px;
    height: 35px;
    cursor: pointer;
    position: absolute;
    right: 15px;
    ::before, ::after {
        content: '';
        background: ${theme.red};
        position: absolute;
        top: 15px;
        left: 0;
        width: 35px;
        height: 5px;
        transform: rotate(-45deg);
    }
    ::after {
        transform: rotate(45deg);
    }
`;

const Title = styled.h3`
    text-transform: uppercase;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.big};
    text-align: center;
    ${theme.mq.desktop} {
        text-align: left;
    }
`;

const SimilarPokemons = styled.div`
    display: grid;
    width: 100%;
    ${theme.mq.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px 30px;
        justify-items: center;
    }
`;

class Modal extends React.Component {
    state = {
        show: false
    }
    closeModal = () => {
        this.setState({show: false});
    }
    refreshData = id => {
        this.props.fetchPokemonDetails(id)
        .then(this.setState({show: true}));
    }
    componentDidMount = () => {
        this.refreshData(this.props.match.params.id);
    }
    componentWillReceiveProps = nextProps => {
        if((this.props.match.params.id !== nextProps.match.params.id) || !this.state.show)  
            this.refreshData(nextProps.match.params.id);
    }
    render() {
        return (
            <Container show={this.state.show}>
                <Box key={this.props.match.params.id}>
                    <CloseButton to='/' onClick={this.closeModal}/>
                    <Info details={this.props.pokemonDetails.details}/>
                    <Title>Similar pokemons</Title>
                    <SimilarPokemons>
                        {this.props.pokemonDetails.similar.map(item => 
                            <PokemonItem 
                                key={`similar-${item.id}`}
                                id={item.id}
                                imageSrc={item.imageUrl} 
                                name={item.name} 
                                superType={item.supertype}
                                handleClick={() => this.showModal(item.id)}
                            />
                        )} 
                    </SimilarPokemons>
                </Box>
            </Container>
        )
    }
}

Modal.propTypes = {
    fetchPokemonDetails: PropTypes.func.isRequired,
    pokemonDetails: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    pokemonDetails: state.itemDetails
});

export default connect(mapStateToProps, { fetchPokemonDetails })(Modal);