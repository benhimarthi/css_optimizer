import parseAttributeName from "./ParseAttributeName";
import parseAttributeValue from "./ParseAttributeValue";

export default function parseAttributes(htmlString: string, currentIndex: number): { [key: string]: string } {
    const attributes: { [key: string]: string } = {};
    while (
        currentIndex < htmlString.length &&
        htmlString[currentIndex] !== '>'
    ) {
        const attributeName = parseAttributeName(htmlString, currentIndex);
        const attributeValue = parseAttributeValue(htmlString, currentIndex);
        attributes[attributeName] = attributeValue;
    }
    return attributes;
}