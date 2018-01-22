import React from "react";
import styled from "styled-components";

const Page = ({ heading, className, children }) => (
  <article className={`page ${className}`}>
    <h1 className="page__heading">{heading}</h1>
    {children}
  </article>
);

export default styled(Page)`
  h1 {
    text-transform: uppercase;
    padding: 0 20px;
    margin: 40px 0;
    text-align: center;
  }
`;
