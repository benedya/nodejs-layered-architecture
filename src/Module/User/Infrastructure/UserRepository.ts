import { UserRepositoryInterface } from '../Domain/Respository/UserRepositoryInterface';
import { User } from '../Domain/Entity/User';
import { injectable } from 'inversify';

@injectable()
export class UserRepository implements UserRepositoryInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async findUserByEmail(email: string): Promise<User | null> {
    return Promise.resolve(null);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async saveEntity(entity: User): Promise<void> {
    await Promise.resolve();
  }
}
