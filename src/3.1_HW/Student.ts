export class Student {
    // implement 'set grade' and 'set visit' methods

    private _firstName: string = '';
    private _lastName: string = '';
    private _birthYear: number = 0;
    private _grades: { [workName: string]: number } = {};
    private _visits: { [lesson: string]: boolean } = {};

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    setGrade(workName: string, mark: number): void {
        this._grades[workName] = mark;
    }

    setVisit(lesson: string, present: boolean): void {
        this._visits[lesson] = present;
    }

    getPerformanceRating(): number {
        const gradeValues = Object.values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const totalLessons = Object.keys(this._visits).length;
        const attendanceCount = Object.values(this._visits).filter(present => present).length;
        const attendancePercentage = totalLessons > 0 ? (attendanceCount / totalLessons) * 100 : 0;

        return (averageGrade + attendancePercentage) / 2;
    }
}
