interface Nodes {
    type: string;
    tagName?: string;
    attributes?: { [key: string]: string };
    children?: Nodes[];
    text_content?: string;
}