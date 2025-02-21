import { Node } from "./node";
import type { Visitor } from "../visitors/visitor";
import type { IToken } from "ebnf";

export class SetNode extends Node {
  constructor(token: IToken) {
    super(token);
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitSet(this);
  }
}
