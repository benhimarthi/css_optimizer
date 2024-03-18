export default function parseTagName(htmlString: string, currentIndex: number):string{
    let tagName = '';
    while (
        currentIndex < htmlString.length &&
        htmlString[currentIndex] !== ' ' &&
        htmlString[currentIndex] !== '>'
    ) {
        tagName += htmlString[currentIndex];
        currentIndex++;
    }
    return tagName;
}