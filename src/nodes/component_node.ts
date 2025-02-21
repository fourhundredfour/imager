import { Node } from "./node";
import type { Visitor } from "../visitors/visitor";
import type { IToken } from "ebnf";

export class ComponentNode extends Node {
  constructor(token: IToken) {
    super(token);
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitComponent(this);
  }
}
