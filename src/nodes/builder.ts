import type { IToken } from "ebnf";
import { ColorNode } from "./color_node";
import { ComponentNode } from "./component_node";
import { FigureStringNode } from "./figure_string_node";
import { Node } from "./node";
import { PartNode } from "./part_node";
import { SetNode } from "./set_node";

type NodeConstructor<T extends Node = Node> = new (token: IToken) => T;

export const nodeMap: Record<string, NodeConstructor> = {
  figure_string: FigureStringNode,
  part: PartNode,
  component_id: ComponentNode,
  set_id: SetNode,
  color_id: ColorNode,
};

export class Builder {
  static build(token: IToken): Node {
    return Node.fromToken(token);
  }
}
