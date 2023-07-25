export class AudioData {
    private readonly _data: string;

    constructor(data: string) {
        this._data = data;
    }

    get data(): string {
        return this._data;
    }
}
