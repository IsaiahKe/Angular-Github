
export class User{
    constructor(
        public name: string,
        public avatar_url: string,
        public public_repos: number,
        public followers: number,
        public following: number,
        public bio: string,
        public created_at: string) { }
}