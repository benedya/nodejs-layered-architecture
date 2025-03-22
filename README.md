
> ⚠️ More elaborated version you can find here [https://github.com/benedya/nestjs-layered-architecture](https://github.com/benedya/nestjs-layered-architecture)  

&nbsp;
&nbsp;

# [Layered Architecture Boilerplate using NodeJS and TypeScript](https://github.com/benedya/nodejs-layered-architecture)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/benedya/nodejs-layered-architecture/blob/master/LICENSE)

Welcome to the **Layered (Clean) Architecture Example** built with NodeJS and TypeScript. This open-source project provides a comprehensive boilerplate showcasing a well-structured and maintainable architecture for your NodeJS applications.

## Table of Contents
- [Introduction](#introduction)
- [Architecture Overview](#architecture-overview)
- [Dependency Rules](#dependency-rules)
- [Controlling Dependencies](#controlling-dependencies)
- [Dependency Injection](#dependency-injection)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The primary objective of this project is to demonstrate how to create a scalable and modular application structure using the powerful concept of the **Clean Architecture**. The architecture encourages separation of concerns and provides a clear distinction between different layers of your application.

## Architecture Overview
The application follows the **Clean Architecture**, which consists of three main layers:

1. **Domain Layer**: This layer holds the core business logic of your application following the principles of Domain-Driven Design (DDD). It is independent of any other layer and contains entities, value objects, aggregates, and domain services.

2. **Application Layer**: The application layer houses the various features and use cases that your module offers. It depends on the Domain layer to execute business logic and operations.

3. **Infrastructure Layer**: The infrastructure layer contains implementations of interfaces defined in the inner layers. It deals with the technical aspects of your application, such as database access, external APIs, and other third-party integrations. This layer depends on both the Application and Domain layers.

![Architecture Diagram](Layers.png)

## Dependency Rules
To maintain a clean and well-structured architecture, we adhere to the following dependency rules:

- **Domain Layer**: The core domain logic should not depend on any other layer, keeping it decoupled and reusable.

- **Application Layer**: The application layer can depend on the Domain layer to access and utilize domain logic to fulfill use cases.

- **Infrastructure Layer**: The infrastructure layer can depend on both the Application and Domain layers, allowing it to implement the interfaces defined in the inner layers.

## Controlling Dependencies
In order to enforce the defined dependency rules, we utilize the `eslint-plugin-boundaries` plugin. The rules are clearly described in the `.eslintrc.js` file, ensuring that our architecture stays consistent and clean.

## Dependency Injection
We leverage **InversifyJS** to configure and manage dependencies across the application. InversifyJS provides a powerful inversion of control container, making it easy to handle the injection of dependencies and manage the application's lifecycle effectively.

## Examples
A module's use cases (from the Application layer) can be used in commands, controllers, etc.

```typescript
import { container } from './inversify.config';
import { CreateUserUseCase } from './Module/User/Application/CreateUserUseCase';

const email = 'user@test.com';
const crateUserUseCase = container.get(CreateUserUseCase);

const user = await crateUserUseCase.createUser(email);

```

Feel free to explore the different layers and modules of the application to understand how the architecture comes together.

## Contributing
We welcome contributions to improve and expand this project. If you have any ideas, bug fixes, or enhancements, please feel free to open an issue or submit a pull request. Let's collaborate to create an even better example of the Clean Architecture!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

We hope this example helps you build robust and scalable applications using the power of Clean Architecture. Happy coding! If you have any questions or need assistance, please don't hesitate to reach out.
