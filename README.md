# [WIP] Node TypeScript DDD example
## Module structure

```bash
# src/Module

    ModuleName
    ├── Application
    ├── Domain
    │   ├── Entity
    │   ├── Service
    │   └── Respository
    ├── Infrastructure
    └── index.ts
```
- `Application` layer contains use cases of the module.
- `Domain` layer contains domain logic.
- `Infrastructure` layer contains interfaces implementation.
- `index.ts` file contains API of the module.

## Docker

```sh
docker-compose up -d
```
It should be available on this url
> http://127.0.0.1:8888