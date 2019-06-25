import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemons, fetchPokemonDetails } from '../../actions/pokemonActions';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';

import PokemonItem from '../PokemonItem/PokemonItem';
import Pokeball from '../../assets/images/pokeball.svg'

const Container = styled.div`
    padding-top: 15px;
    margin: 0 auto;
    ${theme.mq.desktop} {
        max-width: 1024px;
    }
`;
const ItemsContainer = styled.div`
    display: grid;
    ${theme.mq.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px 30px;
        justify-items: center;
    }
`;

const Loader = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 0;
`;

const StyledImage = styled.img`
    width: 50px;
    animation: rotating 1s linear infinite;

    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

class PokemonList extends React.Component {
    render() {
        return (
            <Container>
                <InfiniteScroll
                    loadMore={this.props.fetchPokemons}
                    hasMore={this.props.pokemons.length < this.props.maxItems}
                    loader={
                        <Loader key={0}>
                            <StyledImage src={Pokeball} alt="loading"/>
                        </Loader>
                    }
                >
                    <ItemsContainer>
                        {this.props.pokemons.map(item => 
                            <PokemonItem 
                                key={item.id} 
                                imageSrc={item.imageUrl} 
                                name={item.name} 
                                superType={item.supertype}
                            />
                        )} 
                    </ItemsContainer>
                </InfiniteScroll>
            </Container>
        );
    }
}

PokemonList.propTypes = {
    fetchPokemons: PropTypes.func.isRequired,
    fetchPokemonDetails: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
    maxItems: PropTypes.number.isRequired,
    pokemonDetails: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    pokemons: state.items.pokemons,
    maxItems: state.items.maxItems,
    pokemonDetails: state.itemDetails,
});

export default connect(mapStateToProps, { fetchPokemons, fetchPokemonDetails })(PokemonList);

