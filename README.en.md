# DrivenEXE Starter Kit

## 🎯 What is this?

This repository is a structured and **orchestrated** foundation to bootstrap projects with consistency, validation, and scalability.

⚠️ This is NOT a product.
It is a reusable and **guided** system foundation.

---

## 🚀 Quick Start

### 1. Starter Installation

```bash
# Clone the repository from your Git provider (GitHub, GitLab, Bitbucket, etc.)
git clone https://github.com/drivenexe/drivenexe-starter my-project
cd my-project
```

> **Orchestration Tip:** If you use the [GitHub CLI](https://cli.github.com/) (as an example tool), you can speed up the remote repository creation with:
> `gh repo create my-project --public --source=. --remote=origin --push`

### 2. Initial Setup

```bash
# Install dependencies using Bun
bun install
```

### 3. System Validation

```bash
# Run validation to ensure integrity
bun run validate
```

### 4. Using the SKILL

The system is **assisted** via the `SKILL.md` file. Open it and follow the instructions for the commands:

* `init`
* `validate`
* `sprint`
* `audit`

---

## 🧩 Supported Project Types

* **Web** → Playwright testing (located in `tests/web/`)
* **Mobile** → Maestro testing (located in `tests/mobile/`)
* **Multiplatform** → isolated support for both

---

## ⚠️ System Rules

* Do not modify the folder structure without technical necessity.
* Never skip the validation step (`bun run validate`).
* Do not add product/business logic inside the foundation.

---

## 🧠 How it Works

The system follows the execution model:
**→ define → implement → validate → iterate**

---

## 🚀 Next Step

After initialization, use the `sprint` command in the SKILL to define your first work cycle.
