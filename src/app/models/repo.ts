export class Repo {
    constructor(
        public name: string,
        public html_url: string,
        public url: string,
        public language: string,
        public created_at: string,
        public description: string,
        public updated_at: string,
        public clone_url: string
    ) { }
}