import * as messageTypesAPI from "./messageTypeCollection";

/**
 * Collection of messages. Methods for deleting and adding them.
 * @author Joonas Haikonen
 */
const messages = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    text:
      "All messages have their own genres and you can like and delete them. This message is 'liked'.",
    messageType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Advice" },
    messageColor: { _id: "5b21ca3eeb7f6fbccd471918", name: "red" },
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    text:
      "Website doesn't have a database, so modifications will not be saved. If you reload the page all created messages will be gone.",
    messageType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Advice" },
    messageColor: { _id: "5b21ca3eeb7f6fbccd471918", name: "red" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    text:
      "You can create your own message and choose a color and other things for it.",
    messageType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Advice" },
    messageColor: { _id: "5b21ca3eeb7f6fbccd471918", name: "red" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    text:
      "Messages that have advice as a genre have useful information about using this website.",
    messageType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Advice" },
    messageColor: { _id: "5b21ca3eeb7f6fbccd471914", name: "green" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    text:
      "This website is pretty good even though it doesn't sort the new messages.",
    messageType: { _id: "5b21ca3eeb7f6fbccd471814", name: "Opinion" },
    messageColor: { _id: "5b21ca3eeb7f6fbccd471918", name: "red" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    text: "Greetings!",
    messageType: { _id: "5b21ca3eeb7f6fbccd471820", name: "Other" },
    messageColor: { _id: "5b21ca3eeb7f6fbccd471920", name: "blue" },
  },
];

export function getMessages() {
  return messages;
}

export function getMessage(id) {
  return messages.find((m) => m._id === id);
}

export function saveMessage(message) {
  let messageInDb = messages.find((m) => m._id === message._id) || {};
  messageInDb.text = message.text;
  messageInDb.messageType = messageTypesAPI.messageTypes.find(
    (g) => g._id === message.messageTypeId
  );
  messageInDb.messageColor = messageTypesAPI.messageColors.find(
    (c) => c._id === message.messageColorId
  );
  if (!messageInDb._id) {
    messageInDb._id = Date.now().toString();
    messages.push(messageInDb);
  }

  return messageInDb;
}

export function deleteMessage(id) {
  let messageInDb = messages.find((m) => m._id === id);
  messages.splice(messages.indexOf(messageInDb), 1);
  return messageInDb;
}
