import { Grammars } from "ebnf";
import { FigureStringVisitor } from "../../src/visitors";
import { Builder, Node } from "../../src/nodes";

const grammarFile = Bun.file("./grammar/figure.ebnf");

const parser = new Grammars.W3C.Parser(await grammarFile.text());

function getTree(input: string): Node {
  const ast = parser.getAST(input);
  return Builder.build(ast);
}

const figure =
  "hr-5619-1404.hd-629-3.ch-3881-1334.lg-3006-89-1335.sh-5670-1334.he-3070-66.fa-5467.ca-3885-66-66.cc-5800-89-1334";

const tree = getTree(figure);

console.log("Before running visitor: ", figure);

const visitor = new FigureStringVisitor();
console.log("Visitor: ", tree.accept(visitor));
