import React from 'react';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';

const Navbar = styled.div`
    background: ${theme.red};
    padding: 10px 0;
    z-index: 1;
    ${theme.mq.desktop} {
        padding: 10px 15px;
    }
`;

const Wrapper = styled.div`
    ${theme.mq.desktop} {
        margin: 0 auto;
        max-width: 1024px;
    }
`;

const StyledH1 = styled.h1`
    text-align: center;
    color: ${theme.yellow};
    margin: 0;
    padding: 0;
    ${theme.mq.desktop} {
        text-align: left;
    }
`;

const Header = () => (
    <Navbar>
        <Wrapper>
            <StyledH1>NeoPOKEDEX</StyledH1>
        </Wrapper>
    </Navbar>
)

export default Header;