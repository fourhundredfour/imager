import type { IToken, TokenError } from "ebnf";
import type { Visitor } from "../visitors/visitor";
import { Node } from "./node";

export class FigureStringNode extends Node {
  constructor(token: IToken) {
    super(token);
    Object.assign(this, token);
  }
  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitFigureString(this);
  }
}
