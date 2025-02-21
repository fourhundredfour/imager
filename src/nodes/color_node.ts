import { Node } from "./node";
import type { Visitor } from "../visitors/visitor";
import type { IToken } from "ebnf";

export class ColorNode extends Node {
  constructor(token: IToken) {
    super(token);
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitColor(this);
  }
}
