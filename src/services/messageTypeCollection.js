/**
 * Collection of messages types and colors.
 * @author Joonas Haikonen
 */
export const messageTypes = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Advice" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Opinion" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Other" },
];

export const messageColors = [
  { _id: "5b21ca3eeb7f6fbccd471918", name: "red" },
  { _id: "5b21ca3eeb7f6fbccd471914", name: "green" },
  { _id: "5b21ca3eeb7f6fbccd471920", name: "blue" },
];

export function getMessageTypes() {
  return messageTypes.filter((g) => g);
}

export function getMessageColors() {
  return messageColors.filter((c) => c);
}
