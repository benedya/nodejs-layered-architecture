import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import {UserRepositoryInterface} from "./Module/User/Domain/Respository/UserRepositoryInterface";
import {UserRepository} from "./Module/User/Infrastructure/UserRepository";
import {CreateUserUseCase} from "./Module/User/Application/CreateUserUseCase";

const container = new Container();
container.bind<UserRepositoryInterface>(TYPES.UserRepository).to(UserRepository);
container.bind<CreateUserUseCase>(CreateUserUseCase).toSelf();

export { container };
