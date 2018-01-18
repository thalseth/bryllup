import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Nav from "./Nav";

const TabBar = ({ height, className }) => (
  <nav height={height} className={className}>
    <Nav />
  </nav>
);

TabBar.propTypes = {
  height: PropTypes.number.isRequired
};

export default styled(TabBar)`
  height: ${props => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444;
  background-color: #fcfcfc;
  border-top: 1px solid #d4d4d4;
`;
