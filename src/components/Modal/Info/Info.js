import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../assets/styles/theme';

const Container = styled.div`
    ${theme.mq.desktop} {
        display: grid;
        grid-template-columns: 350px auto;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    max-width: 400px;
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    ${theme.mq.desktop} {
        width: 350px;
        margin: 0;
    }
`;

const Details = styled.div`
    flex-direction: column;
    text-align: center;
    ${theme.mq.desktop} {
        margin-left: 50px;
        text-align: left;
    }
`;

const Label = styled.p`
    font-weight: ${theme.font.weight.bold};
    margin-bottom: 0;
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

const Text = styled.p`
    padding: 0;
    margin: 0;
`;

class Info extends React.Component {
    render() {
        const { imageUrlHiRes, name, supertype, id, series, types, rarity, nationalPokedexNumber, hp, set, weaknesses, attacks, evolvesFrom } = this.props.details;
        return (
            <Container>
                <StyledImage src={imageUrlHiRes} alt={name}/>
                <Details>
                    <Label>Name:</Label>
                    <Text>{name}</Text>
                    <Label>Super type:</Label>
                    <Text>{supertype}</Text>
                    <Label>Id:</Label>
                    <Text>{id}</Text>
                    <Label>Series:</Label>
                    <Text>{series}</Text>
                    <Title>Details</Title>
                    {types ? <Text>Types: {types.map(type => `${type}`).toString()}</Text>: ''}
                    {rarity ? <Text>Rarity: {hp}</Text> : ''}
                    {nationalPokedexNumber ? <Text>National Pokedex Number: {nationalPokedexNumber}</Text> : ''}
                    {hp ? <Text>HP: {hp}</Text> : ''}
                    {set ? <Text>Set: {set}</Text> : ''}
                    {weaknesses ? <Text>Weaknesses: {weaknesses.map(weakness => `${weakness.type}`).toString()}</Text>: ''}
                    {attacks ? <Text>Attacks: {attacks.map(attack => `${attack.name}`).toString()}</Text>: ''}
                    {evolvesFrom ? <Text>Evolves from: {evolvesFrom}</Text> : ''}
                </Details>
            </Container>
        )   
    }
}

Info.propTypes = {
    details: PropTypes.object.isRequired
}

export default Info;
