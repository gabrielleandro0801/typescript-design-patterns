import { AudioData } from "./data";

export class AudioDecoder {
    decode(audioData: AudioData): string {
        console.log("Decoding song...");
        const base64Decoder = (strInBase64: string): string => Buffer.from(strInBase64, "base64").toString("binary")

        return `${base64Decoder(audioData.data)}`;
    }
}
