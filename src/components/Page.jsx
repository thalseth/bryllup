import React from "react";
import styled from "styled-components";

const Page = ({ heading, className, children }) => (
  <article className={`page ${className}`}>
    <h1 className="page__heading">{heading}</h1>
    {children}
  </article>
);

export default styled(Page)`
  padding: 20px;

  h1 {
    text-transform: uppercase;
    /* text-align: center; */
  }
`;
