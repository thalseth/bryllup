import React from "react";
import styled from "styled-components";
import Heads from "./Heads";

const Page = ({ heading, className, children, icon }) => (
  <article className={`page ${className}`}>
    <header className="header">
      <div className="header__container">
        <h1 className="page__heading">{heading}</h1>
        <Heads />
      </div>
    </header>
    {children}
  </article>
);

export default styled(Page)`
  h1 {
    text-transform: uppercase;
    padding-right: 20px;
    display: none;
    @media (min-width: 500px) {
      display: block;
    }
  }

  .header {
    padding: 20px 20px 0;
  }
  .header__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
