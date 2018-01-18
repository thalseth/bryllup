import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Page from "./Page";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;

  ${Page} {
    will-change: transform;
    background-color: white;
    min-height: 100vh;
  }
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node
};
export default Container;
