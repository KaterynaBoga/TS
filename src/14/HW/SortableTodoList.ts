import { Note } from "./Note";
import { TodoList } from "./TodoList";

export class SortableTodoList extends TodoList {
    public sortNotes(by: 'status' | 'createdAt'): Note[] {
        const sortedNotes = [...this.getAllNotes()];

        if (by === 'status') {
            sortedNotes.sort((a, b) => a.status.localeCompare(b.status));
        } else if (by === 'createdAt') {
            sortedNotes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        } else {
            throw new Error('Invalid sort criteria. Use "status" or "createdAt".');
        }

        return sortedNotes;
    }
}
