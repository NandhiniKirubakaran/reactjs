import React from "react";
import { ButtonGroup, Button } from "reactstrap";

export default function Quantity({ quantity = 0 }) {
  return (
    <ButtonGroup className="my-2" size="sm">
      <Button outline>-</Button>
      <input
        style={{
          width: "50px",
          height: "20px",
          textAlign: "center",
        }}
        value={quantity}
      />
      <Button outline>+</Button>
    </ButtonGroup>
  );
}
