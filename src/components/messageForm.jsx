import React from "react";
import Joi from "joi-browser";
import Form from "./model/form";
import { getMessage, saveMessage } from "../services/messageCollection";
import {
  getMessageTypes,
  getMessageColors,
} from "../services/messageTypeCollection";

/**
 * Class for the 'New Message' page. Uses Joi for ComboBoxes and to give message text.
 * Extends Form class.
 * @author Joonas Haikonen
 */
class MessageForm extends Form {
  state = {
    data: {
      text: "",
      messageTypeId: "",
      messageColorId: "",
    },
    messageTypes: [],
    messageColors: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    text: Joi.string().required().label("Text"),
    messageTypeId: Joi.string().required().label("MessageType"),
    messageColorId: Joi.string().required().label("MessageColor"),
  };

  //used to get messages to the interface when page is loaded.
  componentDidMount() {
    const messageTypes = getMessageTypes();
    this.setState({ messageTypes });

    const messageColors = getMessageColors();
    this.setState({ messageColors });

    const messageId = this.props.match.params.id;
    if (messageId === "new") return;

    const message = getMessage(messageId);
    if (!message) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(message) });
  }

  mapToViewModel(message) {
    return {
      //schema is used to define the information types.
      _id: message._id,
      text: message.text,
      messageTypeId: message.messageType._id,
      messageColorId: message.messageColor._id,
    };
  }

  // called by handleSubmit method.
  doSubmit = () => {
    saveMessage(this.state.data);

    this.props.history.push("/messages");
  };

  render() {
    return (
      <div>
        <h1>New Message</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("text", "Text")}
          {this.renderSelect(
            "messageTypeId",
            "Message type",
            this.state.messageTypes
          )}
          {this.renderSelect(
            "messageColorId",
            "Message color",
            this.state.messageColors
          )}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MessageForm;
