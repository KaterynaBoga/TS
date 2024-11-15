import { Note } from "./Note";
import { TodoList } from "./TodoList";

export class SearchableTodoList extends TodoList {
    public searchNotes(keyword: string, searchBy: 'title' | 'content'): Note[] {
        if (searchBy === 'title') {
            return this.getAllNotes().filter(note => note.title.includes(keyword));
        } else if (searchBy === 'content') {
            return this.getAllNotes().filter(note => note.content.includes(keyword));
        } else {
            throw new Error('Invalid search criteria. Use "title" or "content".');
        }
    }
}
