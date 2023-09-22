import { Injectable } from "@angular/core";

@Injectable()
export class loggerService{
    constructor(){}
    log(msg:string){
        console.log(msg);
    }
    
}