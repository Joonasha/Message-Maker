import React, { Component } from "react";
import Table from "./model/table";
import Like from "./model/like";

/**
 * Message table class. Puts message information into 'columns' array and calls
 * table class to handle the information.
 * @author Joonas Haikonen
 */
class MessagesTable extends Component {
  columns = [
    { path: "text", label: "Text" },
    { path: "messageColor.name", label: "MessageColor" },
    {
      key: "like",
      content: (message) => (
        <Like
          liked={message.liked}
          onClick={() => this.props.onLike(message)}
        ></Like>
      ),
    },
    { path: "messageType.name", label: "MessageType" },
    {
      key: "delete",
      content: (message) => (
        <button
          onClick={() => this.props.onDelete(message)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { messages, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={messages}
        sortColumn={sortColumn}
        onSort={onSort}
      ></Table>
    );
  }
}

export default MessagesTable;
