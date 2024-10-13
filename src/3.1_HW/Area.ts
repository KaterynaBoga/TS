import { Level } from './Level';

export class Area {
    // implement getters for fields and 'add/remove level' methods
    private _levels: Level[] = [];
    private _name: string = '';

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get levels(): Level[] {
        return this._levels;
    }

    addLevel(level: Level): void {
        this._levels.push(level);
    }

    removeLevel(level: Level): void {
        this._levels = this._levels.filter((l) => l !== level);
    }

}
