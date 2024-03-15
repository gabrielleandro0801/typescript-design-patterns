import { Admin } from "./domain/admin";
import { ChatMediator } from "./domain/chat-mediator";
import { User } from "./domain/user";

function main() {
    const mediator: ChatMediator = new ChatMediator();

    const james: User = new User("James", mediator);
    const john: User = new User("John", mediator);
    const paul: User = new User("Paul", mediator);

    mediator.addUser(james);
    mediator.addUser(john);
    mediator.addUser(paul);

    const peter: Admin = new Admin("Peter", mediator);
    mediator.admin = peter;

    james.send("Hello, Users (from James)");
    john.send("Hello, Users (from John)");
    paul.send("Hello, Users (from Paul)");
    peter.sendToUser(james, "Hi, James");

    /*
    ChatMediator: A classe que atua como mediador entre os usuários e administradores.
        Mantém listas de usuários e administradores registrados.
        Tem métodos para adicionar usuários, definir o administrador e enviar mensagens.

    User: Representa um usuário do chat.
        Possui um nome e uma referência ao mediador. 
        Tem métodos para enviar e receber mensagens.

    Admin: Representa um administrador do chat.
        Possui um nome e uma referência ao mediador.
        Tem métodos para enviar mensagens a usuários específicos e receber mensagens de outros usuários ou administradores.

    Neste exemplo, o ChatMediator age como intermediário entre os usuários (User) e os administradores (Admin) do chat.
    Quando um usuário envia uma mensagem, o mediador encaminha a mensagem para todos os outros usuários e também para o administrador.
    Quando um administrador envia uma mensagem para um usuário específico, o mediador entrega a mensagem diretamente para o usuário-alvo.
    O Mediator ajuda a reduzir o acoplamento entre os participantes do chat, tornando o código mais flexível e de fácil manutenção.

    Exemplo gerado pelo ChatGPT.
    */
}

(() => {
    main();
})();
