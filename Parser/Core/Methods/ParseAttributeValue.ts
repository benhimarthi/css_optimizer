export default function parseAttributeValue(htmlString: string, currentIndex: number): string {
    let attributeValue = '';
    while (
        currentIndex < htmlString.length &&
        htmlString[currentIndex] !== '"' &&
        htmlString[currentIndex] !== "'"
    ) {
        currentIndex++;
    }
    const quoteChar = htmlString[currentIndex];
    currentIndex++; // skip opening quote
    while (
        currentIndex < htmlString.length &&
        htmlString[currentIndex] !== quoteChar
    ) {
        attributeValue += htmlString[currentIndex];
        currentIndex++;
    }
    currentIndex++; // skip closing quote
    return attributeValue;
}