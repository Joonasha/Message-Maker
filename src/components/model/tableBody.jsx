import React, { Component } from "react";
import _ from "lodash";
import { Row, Col } from "react-bootstrap";

/**
 * TableBody class. Renders each message to a own row.
 * @author Joonas Haikonen
 */
class TableBody extends Component {
  // Gets information from the columns table, which contains message information.
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;
    //columns2 contains all message related information, except color and text.
    //columns is only used to get message's color and text.
    const columns2 = columns.slice(2, columns.length);

    return (
      <Row style={{}}>
        {data.map((item) => (
          <Row
            key={item._id}
            style={{
              margin: 10,
            }}
          >
            <Row style={{ height: "110px" }}>
              <Col></Col>
            </Row>
            <Row
              style={{
                height: "40px",
              }}
            >
              <Col
                style={{
                  maxWidth: "10px",
                  borderTop: "solid 1px black",
                  borderLeft: "solid 1px black",
                  borderBottom: "solid 1px black",
                  backgroundColor: this.renderCell(item, columns[1]),
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
              ></Col>
              <Col
                style={{
                  maxWidth: "80px",
                  borderTop: "solid 1px black",
                  borderLeft: "solid 1px black",
                  borderBottom: "solid 1px black",
                }}
              >
                {columns2.map((column) => (
                  <Row
                    style={{
                      maxWidth: "100px",
                      borderSpacing: 5,
                      margin: 10,
                    }}
                    key={this.createKey(item, column)}
                  >
                    <Row
                      style={{
                        maxWidth: "100px",
                        borderSpacing: 5,
                      }}
                    >
                      {this.renderCell(item, column)}
                    </Row>
                  </Row>
                ))}
              </Col>
              <Col
                style={{
                  width: "400px",
                  borderTop: "solid 1px black",
                  borderLeft: "solid 1px black",
                  borderRight: "solid 1px black",
                  borderBottom: "solid 1px black",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  overflowWrap: "break-word",
                }}
              >
                <Row
                  style={{
                    textAlign: "center",
                    margin: 10,
                    overflowWrap: "break-word",
                  }}
                  key={this.createKey(item, columns[0])}
                >
                  <Col
                    style={{
                      textAlign: "center",
                      width: "400px",
                      overflowWrap: "break-word",
                    }}
                  >
                    {this.renderCell(item, columns[0])}
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                </Row>
              </Col>
            </Row>
          </Row>
        ))}
      </Row>
    );
  }
}

export default TableBody;
