import { AudioData } from "./domain/audio/data";
import { MusicPlayerFacade } from "./domain/music-player-facade";

function main() {
    const encodedAudio: string = Buffer.from("Song lyrics...").toString("base64");
    const audioData: AudioData = new AudioData(encodedAudio);

    const musicPlayer: MusicPlayerFacade = new MusicPlayerFacade();
    musicPlayer.play(audioData);

    /*
    AudioData: Classe que representa o áudio a ser reproduzido.
        Possui um atributo data para armazenar os dados do áudio.
        Possui um método getData() para acessar os dados.

    AudioDecoder: Classe que representa o subsistema de decodificação de áudio.
        Possui um método decode(audioData: AudioData) que recebe um objeto AudioData e retorna a string decodificada.

    AudioOutput: Classe que representa o subsistema de saída de áudio.
        Possui um método play(decodedAudio: string) que recebe a string decodificada e a reproduz (simulado aqui com um console.log).

    MusicPlayerFacade: Classe que atua como uma fachada para o sistema de reprodução de música.
        Possui referências aos subsistemas AudioDecoder e AudioOutput.
        Tem um método playMusic(audioData: AudioData) que recebe o áudio a ser reproduzido, realiza a decodificação por meio do AudioDecoder e reproduz o áudio por meio do AudioOutput.

    A fachada MusicPlayerFacade utiliza o AudioDecoder e o AudioOutput para coordenar a reprodução da música.
    Os clientes interagem apenas com a fachada, que esconde a complexidade dos subsistemas.

    Exemplo gerado pelo ChatGPT.
    */
}

(() => {
    main();
})();
