import { Group } from './Group';

export class Level {
    // implement getters for fields and 'add/remove group' methods

    private _groups: Group[] = [];
    private readonly _name: string = '';
    private readonly _description: string = '';

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get groups(): Group[] {
        return this._groups;
    }

    addGroup(group: Group): void {
        this._groups.push(group);
    }

    removeGroup(group: Group): void {
        this._groups = this._groups.filter((g) => g !== group);
    }

}
