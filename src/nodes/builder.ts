import type { IToken } from "ebnf";
import { ColorNode } from "./color_node";
import { ComponentNode } from "./component_node";
import { FigureStringNode } from "./figure_string_node";
import { Node } from "./node";
import { PartNode } from "./part_node";
import { SetNode } from "./set_node";
import { LetterNode } from "./letter_node";
import { DigitNode } from "./digit_node";

type NodeConstructor<T extends Node = Node> = new (token: IToken) => T;

export const nodeMap: Record<string, NodeConstructor> = {
  figure_string: FigureStringNode,
  part: PartNode,
  component_id: ComponentNode,
  set_id: SetNode,
  color_id: ColorNode,
  letter: LetterNode,
  digit: DigitNode,
};

export class Builder {
  private static processedTokens = new WeakMap<IToken, Node>();

  static build(token: IToken): Node {
    return this.fromToken(token);
  }

  static fromToken(token: IToken): Node {
    if (Builder.processedTokens.has(token)) {
      return Builder.processedTokens.get(token)!;
    }

    const nodeClass = nodeMap[token.type];
    if (!nodeClass) {
      throw new Error(`Unknown node: ${token.type}`);
    }

    const node = new nodeClass(token);
    Builder.processedTokens.set(token, node);
    node.nodeChildren = token.children.map((child) => Builder.build(child));

    return node;
  }
}
