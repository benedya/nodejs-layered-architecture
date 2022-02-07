import {UserRepositoryInterface} from "../Domain/Respository/UserRepositoryInterface";
import {User} from "../Domain/Entity/User";
import {UserDTO} from "./Type/UserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: UserRepositoryInterface
    ) {}

    createUser = async (email: string): Promise<UserDTO> => {
        const existedUser = await this.userRepository.findUserByEmail(email)

        if (existedUser) {
            // todo replace by application level exception
            throw new Error(`User with ${email} already exists.`)
        }

        // todo use uuid generator?
        const useId = 1;

        const newUser = new User(useId, email)

        await this.userRepository.saveEntity(newUser)

        return {
            email: newUser.getEmail()
        }
    }
}