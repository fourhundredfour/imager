import type { Visitor } from "../visitors/visitor";
import { Node } from "./node";
import type { IToken } from "ebnf";

export class LetterNode extends Node {
  constructor(token: IToken) {
    super(token);
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitLetter(this);
  }
}
