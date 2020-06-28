import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessagesTable from "./messagesTable";
import ListGroup from "./model/listGroup";
import Pagination from "../pages/pagination";
import { getMessages } from "../services/messageCollection";
import { getMessageTypes } from "../services/messageTypeCollection";
import { paginate } from "../pages/paginate";
import _ from "lodash";

/**
 * Class for the MainWindow. Renders the page and filters messages
 * @author Joonas Haikonen
 */
class Messages extends Component {
  state = {
    messages: [],
    messageTypes: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "text", order: "asc" },
  };

  componentDidMount() {
    const messageTypes = [
      { _id: "", name: "All Message Types" },
      ...getMessageTypes(),
    ];
    this.setState({ messages: getMessages(), messageTypes });
  }

  handleDelete = (message) => {
    const messages = this.state.messages.filter((m) => m._id !== message._id);
    this.setState({ messages });
  };

  handleLike = (message) => {
    const messages = [...this.state.messages];
    const index = messages.indexOf(message);
    messages[index] = { ...messages[index] };
    messages[index].liked = !messages[index].liked;
    this.setState({ messages });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleMessageTypeSelect = (messageType) => {
    this.setState({ selectedMessageType: messageType, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedMessageType,
      messages: allMessages,
    } = this.state;

    const filtered =
      selectedMessageType && selectedMessageType._id
        ? allMessages.filter(
            (m) => m.messageType._id === selectedMessageType._id
          )
        : allMessages;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const messages = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: messages };
  };

  render() {
    const { length: count } = this.state.messages;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no messages in the database.</p>;

    const { totalCount, data: messages } = this.getPagedData();

    return (
      <div className="row">
        <div
          className="col-3"
          style={{ marginBottom: 20, marginTop: 20, cursor: "pointer" }}
        >
          <ListGroup
            dis
            items={this.state.messageTypes}
            selectedItem={this.state.selectedMessageType}
            onItemSelect={this.handleMessageTypeSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/messages/new"
            className="btn btn-primary"
            style={{ marginBottom: 20, marginTop: 20 }}
          >
            New Message
          </Link>
          <p>Showing {totalCount} messages.</p>
          <MessagesTable
            messages={messages}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Messages;
