import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <h1>Payoff My Cards</h1>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  border-bottom: .4rem solid;
  text-align: center;
`;