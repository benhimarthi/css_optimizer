import parser from "./Parser";

export default function parseChildren(htmlString: string, currentIndex: number): Nodes[] {
    const children: Nodes[] = [];
    while (
        currentIndex < htmlString.length &&
        htmlString[currentIndex] !== '<'
    ) {
        children.push(parser(htmlString, currentIndex));
    }
    return children;
}


