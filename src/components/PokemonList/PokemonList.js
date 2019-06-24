import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemons, fetchPokemonDetails } from '../../actions/pokemonActions';
import InfiniteScroll from 'react-infinite-scroller';

class PokemonList extends React.Component {
    render() {
        return (
            <>
                <h1>Hello world</h1>
                <InfiniteScroll
                    loadMore={this.props.fetchPokemons}
                    hasMore={this.props.pokemons.length < this.props.maxItems}
                    loader={<div className="loader" key={0}>Loading...</div>}
                >
                    <div>
                        {this.props.pokemons.map((item) => (
                            <div key={item.id}>
                                <img src={item.imageUrl} alt={item.name} />
                                <p>{item.name}</p>
                                <p>{item.supertype}</p>
                            </div>)
                        )} 
                    </div>
                </InfiniteScroll>
            </>
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

