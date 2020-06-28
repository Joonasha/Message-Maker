import React from "react";
import TableBody from "./tableBody";
import { Container, Row, Col } from "react-bootstrap";
/**
 * Stateless function of the table.
 * @author Joonas Haikonen
 */
const Table = ({ columns, data }) => {
  return (
    // Table has a header and body, which contains messages.
    <Container
      className="table"
      // style={{
      //   borderSpacing: "2px",
      //   tableLayout: "auto",
      // }}
    >
      <Row
        style={{
          Height: 10,
          borderTop: "solid 1px black",
          borderBottom: "solid 1px black",
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        <Col style={{ fontSize: 25, fontWeight: "bold" }}>Messages</Col>
      </Row>
      <TableBody columns={columns} data={data} />
    </Container>
  );
};

export default Table;
