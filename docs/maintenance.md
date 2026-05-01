# MANUTENÇÃO E GOVERNANÇA GIT

Este documento descreve como manter a integridade do sistema DrivenEXE e as regras de sincronização entre as branches.

## 🌳 Gestão de Branches

Seguimos a lógica definida no [AGENTS.md](../AGENTS.md):

1.  **`dev` (Branch Padrão)**: Onde todas as alterações de código e documentação (`docs/`) devem ser commitadas primeiro.
2.  **`main` (Produção)**: Reflete o estado estável do código. **NUNCA** deve conter a pasta `docs/`.

### 🔄 Sincronizando Produção (dev → main)

Sempre que um ciclo de trabalho (sprint) for concluído na `dev`, siga este processo para atualizar a `main`:

```bash
# 1. Vá para a branch main
git checkout main

# 2. Mescle as alterações da dev sem commitar imediatamente
git merge dev --no-commit

# 3. Remova a pasta docs (Regra de Produção)
git rm -r docs

# 4. Finalize o commit e suba para o servidor
git commit -m "prod: deploy stable version (docs/ excluded)"
git push origin main

# 5. Volte para a dev para continuar o trabalho
git checkout dev
```

## 🔍 Auditoria de Sistema

Execute periodicamente o comando de auditoria via SKILL para garantir que nenhum artefato de planejamento vazou para a branch `main`.

---
Regra de Ouro: **Clareza sobre complexidade.**
