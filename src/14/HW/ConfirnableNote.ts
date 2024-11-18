import { Note } from "./Note";

export class ConfirmableNote extends Note {
    constructor(title: string, content: string) {
        super(title, content);
    }

    public updateContent(newContent: string) {
        const confirmation = prompt("This note requires confirmation. Do you want to update it? (yes/no)");
        if (confirmation?.toLowerCase() === 'yes') {
            this.content = newContent;
            this.updatedAt = new Date();
        } else {
            console.log("Update canceled.");
        }
    }
}
