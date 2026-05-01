# SKILL — INITIALIZATION FLOW

Este arquivo define o fluxo de inicialização do projeto.

---

## 🧩 Context Selection

Ao iniciar um novo projeto, o agente deve perguntar:

"Qual o tipo de projeto que você está iniciando?

1. Web
2. Mobile
3. Multiplataforma"

---

## 🛠️ Setup Logic

### 1. Web
* Manter apenas estrutura `tests/web/`
* Dependência: Playwright

### 2. Mobile
* Manter apenas estrutura `tests/mobile/`
* Dependência: Maestro
* Não instalar Playwright

### 3. Multiplataforma
* Manter ambas as estruturas
* Manter separação clara entre as lógicas de teste
