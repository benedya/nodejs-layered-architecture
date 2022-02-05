
export class User {
    constructor(
        private id: number,
        private email:string
    ) {}

    getEmail = (): string => {
        return this.email
    }
}