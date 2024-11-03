export class Note {
    private static idCounter = 1;
    public id: number;
    public title: string;
    public content: string;
    public createdAt: Date;
    public updatedAt: Date;
    public status: 'active' | 'completed';
    public requiresConfirmation: boolean;

    constructor(title: string, content: string, requiresConfirmation: boolean = false) {
        if (!title || !content) {
            throw new Error("Title and content cannot be empty.");
        }
        this.id = Note.idCounter++;
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.status = 'active';
        this.requiresConfirmation = requiresConfirmation;
    }

    public markAsCompleted() {
        this.status = 'completed';
    }

    public updateContent(newContent: string) {
        if (this.requiresConfirmation) {
            console.log("Confirmation required to update.");
            return;
        }
        this.content = newContent;
        this.updatedAt = new Date();
    }
}
