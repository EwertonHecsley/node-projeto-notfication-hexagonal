/* Essa classe abstrata, podendo tambem ser uma interface, define o que o sistema precisa fazer: "enviar uma notificação".

Mas não define como — o "como" virá depois em um adaptador.

Isso se chama Porta de Saída (output port).

O use case vai depender dessa classe/interface, e não de uma implementação concreta (princípio da inversão de dependência). */


import { Notification } from "@/domain/entity/Notification";

export abstract class NotificationSend {
    abstract send(notification: Notification): Promise<void>;
}