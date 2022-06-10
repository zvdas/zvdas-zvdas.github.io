export class Project {
    project_name:string;
    problem:string;
    message:string;
    screenshots:string[] = [];
    code:string;
    procedure:string;

    constructor(project_name:string, problem:string, message:string, screenshots:string[], code:string, procedure:string){
        this.project_name = project_name;
        this.problem = problem;
        this.message = message;
        this.screenshots = screenshots;
        this.code = code;
        this.procedure = procedure;
    }
}