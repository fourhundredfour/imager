import type { Node } from "../nodes/node";

export interface Visitor<T> {
  visitFigureString(node: Node): T;
  visitPart(node: Node): T;
  visitComponent(node: Node): T;
  visitSet(node: Node): T;
  visitColor(node: Node): T;
  visitLetter(node: Node): T;
  visitDigit(node: Node): T;
}
