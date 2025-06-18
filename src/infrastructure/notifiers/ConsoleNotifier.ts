/* Esse é o adaptador de saída: uma implementação concreta da classe abstrata NotificationSender.

Ele faz o trabalho real de enviar a notificação.

Aqui, estamos mockando o envio com um console.log.

Esse tipo de classe fica na borda do sistema, dentro de infrastructure. */


import { NotificationSend } from "@/application/ports/NotificationSend";
import { Notification } from "@/domain/entity/Notification";

export class ConsoleNotifier implements NotificationSend {
    async send(notification: Notification): Promise<void> {
        console.log(
            `[${notification.type.toUpperCase()}] to ${notification.to}: ${notification.message}`
        );
    };
}