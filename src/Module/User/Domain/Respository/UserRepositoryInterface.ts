import { User } from '../Entity/User';

export interface UserRepositoryInterface {
  findUserByEmail(email: string): Promise<User | null>;
  saveEntity(entity: User): Promise<void>;
}
