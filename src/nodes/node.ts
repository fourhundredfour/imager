import type { IToken, TokenError } from "ebnf";
import type { Visitor } from "../visitors";

export abstract class Node implements IToken {
  type: string;
  text: string;
  start: number;
  end: number;
  fullText: string;
  rest: string;
  errors: TokenError[];
  fragment?: boolean;
  lookup?: boolean;
  children: IToken[];
  parent: IToken;
  nodeChildren: Node[] = [];
  nodeParent?: Node;

  constructor(token: IToken) {
    this.type = token.type;
    this.text = token.text;
    this.start = token.start;
    this.end = token.end;
    this.fullText = token.fullText;
    this.rest = token.rest;
    this.errors = token.errors;
    this.fragment = token.fragment;
    this.lookup = token.lookup;
    this.parent = token.parent;
    this.children = token.children;
  }

  abstract accept<T>(visitor: Visitor<T>): T;
}
