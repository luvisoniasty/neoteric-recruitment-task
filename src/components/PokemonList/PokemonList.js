import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemons, fetchPokemonDetails } from '../../actions/pokemonActions';

class PokemonList extends React.Component {
    componentDidMount() {
        this.props.fetchPokemons();
    }
    render() {
        return (
            <h1>Hello world</h1>
        );
    }
}

PokemonList.propTypes = {
    fetchPokemons: PropTypes.func.isRequired,
    fetchPokemonDetails: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
    pokemonDetails: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    pokemons: state.items,
    pokemonDetails: state.itemDetails,
});

export default connect(mapStateToProps, { fetchPokemons, fetchPokemonDetails })(PokemonList);

