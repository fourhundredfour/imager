import type {
  ColorNode,
  ComponentNode,
  FigureStringNode,
  PartNode,
  SetNode,
} from "../nodes";
import type { Visitor } from "./visitor";

export class FigureStringVisitor implements Visitor<string> {
  visitFigureString(node: FigureStringNode): string {
    return node.nodeChildren.map((child) => child.accept(this)).join(".");
  }

  visitPart(node: PartNode): string {
    return node.nodeChildren.map((child) => child.accept(this)).join("-");
  }

  visitComponent(node: ComponentNode): string {
    return node.text;
  }

  visitSet(node: SetNode): string {
    return node.text;
  }

  visitColor(node: ColorNode): string {
    return node.text;
  }
}
