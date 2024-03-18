export default function parseAttributeName(htmlString: string, currentIndex: number): string {
    let attributeName = '';
    while (
        currentIndex < htmlString.length &&
        htmlString[currentIndex] !== '=' &&
        htmlString[currentIndex] !== '>'
    ) {
        attributeName += htmlString[currentIndex];
        currentIndex++;
    }
    return attributeName;
}