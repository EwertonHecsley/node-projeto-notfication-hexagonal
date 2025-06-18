/* Essa é a entidade de domínio: representa o conceito central do negócio.

Fica na camada mais interna da arquitetura.

Não sabe quem vai usá-la, nem como.

Serve para modelar regras e comportamentos. */


export class Notification {
    private constructor(
        private readonly _to: string,
        private readonly _message: string,
        private readonly _type: "email" | "sms"
    ) {
        this._message = _message;
        this._to = _to;
        this._type = _type;
    }

    static create(to: string, message: string, type: "email" | "sms"): Notification {
        if (!to || !message) throw new Error("Recipient and message are required.");
        if (!["email", "sms"].includes(type)) throw new Error("Invalid notification type.");

        return new Notification(to, message, type);
    }

    get to(): string {
        return this._to;
    }

    get message(): string {
        return this._message;
    }

    get type(): string {
        return this._type;
    }
}