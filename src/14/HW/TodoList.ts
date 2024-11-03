import {Note} from "./Note";

class TodoList {
    private notes: Note[] = [];

    public addNote(note: Note) {
        this.notes.push(note);
    }

    public removeNote(id: number): boolean {
        const index = this.notes.findIndex(note => note.id === id);
        if (index !== -1) {
            this.notes.splice(index, 1);
            return true;
        }
        return false;
    }

    public editNote(id: number, newContent: string): boolean {
        const note = this.notes.find(note => note.id === id);
        if (note) {
            note.updateContent(newContent);
            return true;
        }
        return false;
    }

    public getNoteById(id: number): Note | undefined {
        return this.notes.find(note => note.id === id);
    }

    public getAllNotes(): Note[] {
        return this.notes;
    }

    public markNoteAsCompleted(id: number): boolean {
        const note = this.notes.find(note => note.id === id);
        if (note) {
            note.markAsCompleted();
            return true;
        }
        return false;
    }

    public getTotalNotes(): number {
        return this.notes.length;
    }

    public getPendingNotesCount(): number {
        return this.notes.filter(note => note.status === 'active').length;
    }

    public searchNotes(keyword: string): Note[] {
        return this.notes.filter(note =>
            note.title.includes(keyword) || note.content.includes(keyword)
        );
    }

    public sortNotes(by: 'status' | 'createdAt') {
        if (by === 'status') {
            this.notes.sort((a, b) => a.status.localeCompare(b.status));
        } else if (by === 'createdAt') {
            this.notes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        }
    }
}
