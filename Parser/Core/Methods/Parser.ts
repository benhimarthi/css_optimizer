import parseElement from "./ParseElement";
import parseText from "./ParseText";

export default function parser(htmlString: string, currentIndex: number):Nodes{
    const nodes: Nodes[] = [];
    while (currentIndex < htmlString.length) {
        const char = htmlString[currentIndex];
        if (char === '<') {
            nodes.push(parseElement(htmlString, currentIndex));
        } else {
            nodes.push(parseText(htmlString, currentIndex));
        }
    }
    return {
        type: 'document',
        children: nodes,
    };
}