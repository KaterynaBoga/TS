import { Note } from "./Note";

export class DefaultNote extends Note {
    constructor(title: string, content: string) {
        super(title, content);
    }

    public updateContent(newContent: string) {
        this.content = newContent;
        this.updatedAt = new Date();
    }
}
