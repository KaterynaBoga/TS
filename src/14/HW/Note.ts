export enum NoteStatus {
    ACTIVE = 'active',
    COMPLETED = 'completed',
}

export abstract class Note {
    private static idCounter = 1;
    public id: number;
    public title: string;
    public content: string;
    public createdAt: Date;
    public updatedAt: Date;
    public status: NoteStatus;

    constructor(title: string, content: string) {
        if (!title || !content) {
            throw new Error("Title and content cannot be empty.");
        }
        this.id = Note.idCounter++;
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.status = NoteStatus.ACTIVE;
    }

    public markAsCompleted() {
        this.status = NoteStatus.COMPLETED;
    }

    public abstract updateContent(newContent: string): void;
}
