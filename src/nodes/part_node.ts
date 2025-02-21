import type { Visitor } from "../visitors/visitor";
import { Node } from "./node";
import type { IToken } from "ebnf";

export class PartNode extends Node {
  constructor(token: IToken) {
    super(token);
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitPart(this);
  }
}
