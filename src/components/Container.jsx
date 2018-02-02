import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Page from "./Page";
import DateInfoCard from "./DateInfoCard";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;
  max-width: 550px;
  margin: 10px auto;
  padding: 0 10px;
  @media (min-width: 400px) {
    padding: 0 20px;
    margin: 20px auto;
  }

  ${Page} {
    will-change: transform;
    background-color: white;
    min-height: 100vh;
  }

  ${DateInfoCard} {
    border-top: 1px solid black;

    &:last-of-type {
      border-bottom: 1px solid black;
      margin-bottom: 30px;
    }
  }

  section {
    margin-bottom: 40px;
    padding: 0 20px;
  }
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node
};
export default Container;
