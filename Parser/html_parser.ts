import parser from "./Core/Methods/Parser";

class HtmlParser{
    private htmlString: string;
    private currentIndex: number;

    constructor(htmlString: string) {
        this.htmlString = htmlString;
        this.currentIndex = 0;
    }

    parser():Nodes{
        return parser(this.htmlString, this.currentIndex);
    }
}