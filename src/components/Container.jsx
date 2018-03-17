import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Page from "./Page";
import DateInfoCard from "./DateInfoCard";
import color from "../color";

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
    border-top: 1px solid ${color.border};

    &:last-of-type {
      border-bottom: 1px solid ${color.border};
    }
  }

  section {
    padding: 20px;
    border-bottom: 1px solid ${color.border};
  }
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node
};
export default Container;
