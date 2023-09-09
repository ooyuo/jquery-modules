/* eslint-disable no-undef*/

const $parentNode = $("<div>Hello</div>");
const $child = $("<p>I'm a child</p>");

$node = $parentNode.append($child);

$("#app").append($node);
