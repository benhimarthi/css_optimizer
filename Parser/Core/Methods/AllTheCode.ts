
class HTMLParser {
    private htmlString: string;
    private currentIndex: number;
  
    constructor(htmlString: string) {
      this.htmlString = htmlString;
      this.currentIndex = 0;
    }
  
    parse(): Nodes {
      const nodes: Nodes[] = [];
      while (this.currentIndex < this.htmlString.length) {
        const char = this.htmlString[this.currentIndex];
        if (char === '<') {
          nodes.push(this.parseElement());
        } else {
          nodes.push(this.parseText());
        }
      }
      return {
        type: 'document',
        children: nodes,
      };
    }
  
    parseElement(): Nodes {
      this.currentIndex++; // skip '<'
      const tagName = this.parseTagName();
      const attributes = this.parseAttributes();
      this.currentIndex++; // skip '>'
      const children = this.parseChildren();
      this.currentIndex++; // skip '</'
      this.currentIndex++; // skip tagName
      this.currentIndex++; // skip '>'
      return {
        type: 'element',
        tagName,
        attributes,
        children,
      };
    }
  
    parseTagName(): string {
      let tagName = '';
      while (
        this.currentIndex < this.htmlString.length &&
        this.htmlString[this.currentIndex] !== ' ' &&
        this.htmlString[this.currentIndex] !== '>'
      ) {
        tagName += this.htmlString[this.currentIndex];
        this.currentIndex++;
      }
      return tagName;
    }
  
    parseAttributes(): { [key: string]: string } {
      const attributes: { [key: string]: string } = {};
      while (
        this.currentIndex < this.htmlString.length &&
        this.htmlString[this.currentIndex] !== '>'
      ) {
        const attributeName = this.parseAttributeName();
        const attributeValue = this.parseAttributeValue();
        attributes[attributeName] = attributeValue;
      }
      return attributes;
    }
  
    parseAttributeName(): string {
      let attributeName = '';
      while (
        this.currentIndex < this.htmlString.length &&
        this.htmlString[this.currentIndex] !== '=' &&
        this.htmlString[this.currentIndex] !== '>'
      ) {
        attributeName += this.htmlString[this.currentIndex];
        this.currentIndex++;
      }
      return attributeName;
    }
  
    parseAttributeValue(): string {
      let attributeValue = '';
      while (
        this.currentIndex < this.htmlString.length &&
        this.htmlString[this.currentIndex] !== '"' &&
        this.htmlString[this.currentIndex] !== "'"
      ) {
        this.currentIndex++;
      }
      const quoteChar = this.htmlString[this.currentIndex];
      this.currentIndex++; // skip opening quote
      while (
        this.currentIndex < this.htmlString.length &&
        this.htmlString[this.currentIndex] !== quoteChar
      ) {
        attributeValue += this.htmlString[this.currentIndex];
        this.currentIndex++;
      }
      this.currentIndex++; // skip closing quote
      return attributeValue;
    }
  
    parseText(): Nodes {
      let text_content = '';
      while (
        this.currentIndex < this.htmlString.length &&
        this.htmlString[this.currentIndex] !== '<'
      ) {
        text_content += this.htmlString[this.currentIndex];
        this.currentIndex++;
      }
      return {
        type: 'text',
        text_content,
      };
    }
  
    parseChildren(): Nodes[] {
      const children: Nodes[] = [];
      while (
        this.currentIndex < this.htmlString.length &&
        this.htmlString[this.currentIndex] !== '<'
      ) {
        children.push(this.parse());
      }
      return children;
    }
  }