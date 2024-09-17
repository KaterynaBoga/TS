import {Area} from "./Area";
import {Student} from "./Student";

enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
}

export class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods

    private _area: Area[] = [];
    private _status: Status = Status.ACTIVE;
    private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*
    private readonly directionName: string = '';
    private readonly levelName: string = '';

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    get area(): Area[] {
        return this._area;
    }

    get status(): Status {
        return this._status;
    }

    get students(): Student[] {
        return this._students;
    }

    addStudent(student: Student): void {
        this._students.push(student);
    }

    removeStudent(student: Student): void {
        this._students = this._students.filter((s) => s !== student);
    }

    setStatus(status: Status): void {
        this._status = status;
    }

    showPerformance(): Student[] {
        const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}
