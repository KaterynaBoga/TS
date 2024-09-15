class School {
    directions: any[] = [];

    addDirection(direction: any): void {
        this.directions.push(direction);
    }
}

class Direction {
    levels: any[] = [];
    private readonly _name: string;

    get name(): string {
        return this._name;
    }

    constructor(name: string) {
        this._name = name;
    }

    addLevel(level: any): void {
        this.levels.push(level);
    }
}

class Level {
    groups: any[] = [];
    private readonly _program: string;
    private readonly _name: string;

    constructor(name: string, program: string) {
        this._name = name;
        this._program = program;
    }

    get name(): string {
        return this._name;
    }

    get program(): string {
        return this._program;
    }

    addGroup(group: any): void {
        this.groups.push(group);
    }
}

class Group {
    private _students: any[] = [];
    private readonly _directionName: string;
    private readonly _levelName: string;

    get students(): any[] {
        return this._students;
    }

    constructor(directionName: string, levelName: string) {
        this._directionName = directionName;
        this._levelName = levelName;
    }

    addStudent(student: any): void {
        this._students.push(student);
    }

    showPerformance(): any[] {
        const sortedStudents: any[] = this.students.toSorted(
            (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
        );

        return sortedStudents;
    }
}

class Student {
    grades: {[subject: string]: any} = {};
    attendance: number[] = [];
    private firstName: string;
    private lastName: string;
    private birthYear: number;

    constructor(firstName: string, lastName: string, birthYear: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value: string) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    get age(): number {
        return new Date().getFullYear() - this.birthYear;
    }

    setGrade(subject: string, grade: number): void {
        this.grades[subject] = grade;
    }

    markAttendance(present: number): void {
        this.attendance.push(present);
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = Object.values(this.grades);

        if (gradeValues.length === 0) return 0;

        const averageGrade: number =
            gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

        const attendancePercentage: number =
            (this.attendance.filter((present) => present).length /
                this.attendance.length) *
            100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
