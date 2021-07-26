export class User {
    constructor(
        name:string,
        avatar_url:string,
        public_repos:string,
        followers:number,
        following:number,
        bio:string,
        created_at:string){}
}
