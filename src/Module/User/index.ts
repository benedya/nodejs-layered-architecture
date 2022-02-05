import {CreateUserUseCase} from "./Application/CreateUserUseCase";
import {UserRepository} from "./Infrastructure/UserRepository";

export function provideCrateUserUseCase(): CreateUserUseCase {
    return new CreateUserUseCase(
        new UserRepository()
    )
}