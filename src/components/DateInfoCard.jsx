import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const DateInfoCard = ({ date, events, className }) => {
  const dateObj = new Date(date);
  return (
    <div className={className}>
      <div className="date">
        <div>{dateObj.toLocaleString("nb-NO", { weekday: "long" })}</div>
        <div className="date__day">{dateObj.getDate()}</div>
        <div>{dateObj.toLocaleString("nb-NO", { month: "long" })}</div>
        <div>{dateObj.toLocaleString("nb-NO", { year: "numeric" })}</div>
      </div>
      {events && (
        <div className="info">
          {events.map(({ time, location, link, description }) => (
            <div className="info__block" key={`${time}-${location}`}>
              <p className="info__time">{time}</p>
              <p className="info__location">
                {!link && location}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    title={`Kart til ${location} `}
                  >
                    {location}
                  </a>
                )}{" "}
                | {description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// DateInfoCard.propTypes = {};

export default styled(DateInfoCard)`
  display: flex;
  padding: 10px 0;

  .date {
    text-align: center;
    padding: 10px 5%;
    border-right: 1px solid black;
    text-transform: uppercase;
    font-weight: lighter;

    &__day {
      font-size: 38px;
    }
  }

  .info {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 0 5%;

    &__block {
      width: 100%;

      &:first-of-type {
        margin-bottom: 10px;
      }
    }

    &__time,
    &__location {
      margin: 0;
    }

    &__time {
      font-weight: bold;
    }

    &__location {
      font-weight: lighter;
      text-transform: uppercase;
    }
  }
`;
