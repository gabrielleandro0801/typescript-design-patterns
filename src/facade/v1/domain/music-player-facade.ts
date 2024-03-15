import { AudioData } from "./audio/data";
import { AudioDecoder } from "./audio/decoder";
import { AudioOutput } from "./audio/output";

export class MusicPlayerFacade {
    private readonly _decoder: AudioDecoder;
    private readonly _output: AudioOutput;

    constructor() {
        this._decoder = new AudioDecoder();
        this._output = new AudioOutput();
    }

    play(audioData: AudioData): void {
        const decoded: string = this._decoder.decode(audioData);
        this._output.play(decoded);
    }
}
