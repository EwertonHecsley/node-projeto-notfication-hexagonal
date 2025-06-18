import { SendNotificationUseCase } from "./application/useCase/SendNotification";
import { ConsoleNotifier } from "./infrastructure/notifiers/ConsoleNotifier";

class Main {
    private readonly sender: ConsoleNotifier;
    private readonly useCase: SendNotificationUseCase;

    constructor() {
        this.sender = new ConsoleNotifier();
        this.useCase = new SendNotificationUseCase(this.sender);
    }

    async handler() {
        await this.useCase.execute(
            {
                to: "ewerton@dev.com",
                message: "Seja bem-vindo ao sistema de notificações!",
                type: "email",
            }
        )
    };
};


new Main().handler();

