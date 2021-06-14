import React from "react";
import { Card } from "react-bootstrap";
import "../container/App.css"

function DisplayRobots({ robots }) {
  return (
    <div>
      {robots.map((el, i) => {
        return (
          <div className = "cardStyling">
            <Card
              style={{
                width: "18rem",
                backgroundColor: `${i % 2 === 0 ? "orange" : "red"} `,
              }}
            >
              <Card.Img
                variant="top"
                src={`https://robohash.org/${el.id}/100px180`}
              />
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>{el.email}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayRobots;

{
  /* <h3></h3>
<h4></h4>
<Pic/> */
}
