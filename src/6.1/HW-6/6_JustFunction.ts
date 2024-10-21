interface JustFunction {
    [key: string]: number | string;
}

function checkIfAllNumbers(obj: JustFunction): boolean {
    for (const key in obj) {
        if (typeof obj[key] !== 'number') {
            return false;
        }
    }
    return true;
}
