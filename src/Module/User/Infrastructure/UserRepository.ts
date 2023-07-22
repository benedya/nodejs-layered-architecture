import {UserRepositoryInterface} from "../Domain/Respository/UserRepositoryInterface";
import {User} from "../Domain/Entity/User";
import {injectable} from "inversify";

@injectable()
export class UserRepository implements UserRepositoryInterface {
    public async findUserByEmail(email: string): Promise<User | null> {
        return Promise.resolve(null)
    }

    public async saveEntity(entity: User): Promise<void> {
        await Promise.resolve()
    }
}
