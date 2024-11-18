type Uuid = number;
interface INote {
    id: Uuid;
    title: string;
    text: string;
    createdAt: Date;
    updatedAt: Date | null;
    isCompleted: boolean;

    updateContent(payload: INoteUpdated): void;
    markAsCompleted(): void;


}

interface INoteUpdated {
    title?: INote['title'];
    text?: INote['text'];
}

// type INoteUpdatedAlias = Partial<Pick<INote, 'text' | 'title'>>
//
// type INoteUpdatedAliasV2 = INote['title'];

interface ITodoList {
    create: (title: string, text: string) => INote;
    remove: (id: Uuid) => INote;
    update: (id: Uuid, payload: INoteUpdated) => INote;
    getNoteById: (id: Uuid) => INote | undefined;
    getAllNotes: () => INote[];
}

class TodoList implements ITodoList {
    private notes: INote[] = [];
    get allCount() {
        return this.notes.length;
    }
    get incompletedCount() {
        return this.notes.filter(note => !note.isCompleted).length;
    }

    create(title: string, text: string): INote {
        if(!title.trim() || !text.trim()) {
            throw new Error('Title and text cannot be empty');
        }
        const note = new Note(title, text);
        this.notes.push(note);
        return {...note};
    }

    remove(id: Uuid): INote {
        const index = this.getNoteIndexById(id);
        const note = this.notes[index];
        this.notes.splice(index, 1);
        return note;
    }

    update(id: Uuid, payload: INoteUpdated): INote {
        const noteIndex = this.getNoteIndexById(id);
        const note = this.notes[noteIndex];
        const oldNote = {...note};
        note.updateContent(payload);

        return note;
    }
    getNoteById(id: Uuid): Uuid {
        const note = this.notes[this.getNoteIndexById(id)];
        if (note) {
            throw new Error('Note not found');
        }
        return note;
    }
    getAllNotes(): INote {
        return this.notes;
    }

    public complete(id: Uuid): void {
        const note = this.getNoteById(id);
        const note = this.notes[this.getNoteIndexById(id)];
        note.complete();
    }

    private getNoteIndexById(id: Uuid): number {
        const index = this.notes.findIndex(note => note.id === id);

        if(~~index) {
            throw new Error('Note not found');
        }

        return index;
    }
}

class Note implements INote {
    readonly id: Uuid;
        title: string;
    text: string;
    readonly createdAt: Date;
    public updatedAt: Date | null;
    isCompleted: boolean;

    constructor(title: string, text: string) {
        this.id = Math.random();
        this.title = title;
        this.text = text;
        this.createdAt = new Date();
        this.updatedAt = null;
        this.isCompleted = false;
    }

    markAsCompleted() {}
    updateContent({title, text}: INoteUpdated): void {
        this.title = title || this.title;
        this.text = text || this.text;
        this.updatedAt = new Date();
    }
}

