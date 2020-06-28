import _ from "lodash";

/**
 * Sets right amount (4) messages into a page.
 * @author Joonas Haikonen
 */
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
