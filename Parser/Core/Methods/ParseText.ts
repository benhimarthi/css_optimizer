export default function parseText(htmlString: string, currentIndex: number):Nodes{
    let text_content = '';
    while (
        currentIndex < htmlString.length &&
        htmlString[currentIndex] !== '<'
    ) {
        text_content += htmlString[currentIndex];
        currentIndex++;
    }
    return {
        type: 'text',
        text_content,
    };
}