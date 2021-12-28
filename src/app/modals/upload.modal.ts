export class Upload {
    $key:string | undefined;
    file:File;
    name:string | undefined;
    progress?:number;
    createdAt:Date = new Date();
    constructor(file:File){
        this.file = file
    };
    uploadURL?:String;
}
