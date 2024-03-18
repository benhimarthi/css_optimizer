import parseAttributes from "./ParseAttributes";
import parseChildren from "./ParseChildren";
import parseTagName from "./ParseTagName";

export default function parseElement(htmlString: string, currentIndex: number):Nodes {
    currentIndex++; // skip '<'
    const tagName = parseTagName(htmlString, currentIndex);
    const attributes = parseAttributes(htmlString, currentIndex);
    currentIndex++; // skip '>'
    const children = parseChildren(htmlString, currentIndex);
    currentIndex++; // skip '</'
    currentIndex++; // skip tagName
    currentIndex++; // skip '>'
    return {
        type: 'element',
        tagName,
        attributes,
        children,
    };
}