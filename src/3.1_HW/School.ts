import {Area} from "./Area";

enum Position {
    TEACHER = 'teacher',
    PROFESSOR = 'professor',
    ASSISTANT = 'assistant',
    LECTURER = 'lecturer',
}

enum Company {
    SCHOOL = 'school',
    UNIVERSITY = 'university',
    COLLEGE = 'college',
    COURSE = 'course',
}

interface Lecturer {
    name: string;
    surname: string;
    position: Position;
    company: Company;
    experience: number;
    courses: string[];
    contacts: {
        email: string;
        phone?: string;
    };
}

export class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods


    private _areas: Area[] = [];
    private _lecturers: Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

    get areas(): Area[] {
        return this._areas;
    }

    get lecturers(): Lecturer[] {
        return this._lecturers;
    }

    addArea(area: Area): void {
        this._areas.push(area);
    }

    removeArea(area: Area): void {
        this._areas = this._areas.filter((a) => a !== area);
    }

    addLecturer(lecturer: Lecturer): void {
        this._lecturers.push(lecturer);
    }

    removeLecturer(lecturer: Lecturer): void {
        this._lecturers = this._lecturers.filter((l) => l !== lecturer);
    }
}
