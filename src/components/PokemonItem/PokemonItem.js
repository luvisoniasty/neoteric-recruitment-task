import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import theme from '../../assets/styles/theme';

const Container = styled(Link)`
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding: 15px 30px;
    margin-bottom: 15px;
    color: ${theme.red};
    background: ${theme.darkYellow};
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    transition: background .1s ease-in, color .1s ease-in;

    :hover {
        background: ${theme.red};
        color: ${theme.yellow};
    }

    ${theme.mq.desktop} {
        width: 100%;
        margin: 0;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

const StyledName = styled.h4`
    font-size: ${theme.font.size.ultraBig};
    margin: 30px 0 0 0;
`;

const StyledSuperType = styled.h5`
    font-size: ${theme.font.size.normal};
    font-weight: ${theme.font.weight.regular};
    margin: 10px 0 20px 0;
`;

class PokemonItem extends React.Component {
    render() {
        const { id, imageSrc, name, superType } = this.props;
        return (
            <Container to={{pathname: `/details/${id}`, state: { show: true }}}>
                <StyledImage src={imageSrc} alt={name}/>
                <div>
                    <StyledName>{name}</StyledName>
                    <StyledSuperType>{superType}</StyledSuperType>
                </div>
            </Container>
        )
    }
}

PokemonItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    superType: PropTypes.string.isRequired
}

export default PokemonItem;