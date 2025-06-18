/* Esse é o use case, ou seja, uma ação da aplicação: "enviar notificação".

Ele recebe um NotificationSender (porta de saída) como dependência.

Constrói uma Notification e delega a responsabilidade de envio.

Na arquitetura hexagonal, os use cases são portas de entrada. Eles recebem comandos da "borda" e acionam o núcleo. */


import { Notification } from "@/domain/entity/Notification";
import { NotificationSend } from "../ports/NotificationSend";

type InputeType = {
    to: string;
    message: string;
    type: "email" | "sms";
}

export class SendNotificationUseCase {
    constructor(private readonly sender: NotificationSend) { }

    async execute(input: InputeType): Promise<void> {
        const { to, message, type } = input;
        const notification = Notification.create(to, message, type);
        await this.sender.send(notification);
    }
}