import React from "react";
import Pic from "./Pic";
import { Card } from "react-bootstrap";

function DisplayRobots({ robots }) {
  return (
    <div>
      {robots.map((el) => {
        return (
          <Card style={{ width: "18rem", backgroundColor: "orange" }}>
            <Card.Img variant="top" src={`https://robohash.org/${el.id}/100px180` }/>
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.email}</Card.Text>
            </Card.Body>
          </Card>
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
