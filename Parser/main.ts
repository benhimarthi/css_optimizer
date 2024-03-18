// Example usage
const htmlString = `
<html>
    <head>
        <title>Hello, World!</title>
    </head>
    <body>
        <h1>Welcome to my website</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
`;
const parser = new HTMLParser(htmlString);
const dom = parser.parse();
console.log(JSON.stringify(dom, null, 2));


