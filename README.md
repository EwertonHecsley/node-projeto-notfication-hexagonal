# 🧩 Hexagonal Notification App

Projeto simples para demonstrar os princípios da **Arquitetura Hexagonal** com **TypeScript**. O sistema simula o envio de notificações via diferentes canais (como e-mail ou SMS), mantendo o domínio desacoplado da infraestrutura.

## 🎯 Objetivo

Aplicar arquitetura hexagonal (Ports and Adapters) com separação clara entre:

- Regras de negócio (domínio)
- Casos de uso (aplicação)
- Interfaces externas (infraestrutura)
- Entradas e saídas (adapters)

## 🧱 Arquitetura Hexagonal

```txt
[ Controller / CLI / HTTP ]      ← Adaptador de entrada (opcional)
              ↓
       [ Use Case ]              ← Porta de Entrada
              ↓
       [ Entidade / Domínio ]
              ↓
[ Interface: NotificationSender ] ← Porta de Saída
              ↓
[ ConsoleNotifier | EmailNotifier ] ← Adaptadores de saída
```

## 📁 Estrutura de Pastas

```
src/
├── domain/
│   └── notification.ts
├── application/
│   ├── ports/
│   │   └── notification-sender.ts
│   └── use-cases/
│       └── send-notification.ts
├── infrastructure/
│   └── notifiers/
│       └── console-notifier.ts
└── main.ts
```

## 🚀 Como executar

```bash
npm install
npm start
```

## 🧑‍💻 Autor

Ewerton Hecsley  
[LinkedIn](https://www.linkedin.com/in/ewerton-hecsley-8a613992/) | [GitHub](https://github.com/EwertonHecsley)
