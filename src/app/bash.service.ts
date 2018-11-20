import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BashService {

  response =  new Subject();
  manPage =  new Subject();

  constructor(private http: Http) { }

  executeCommand(message:string){
    console.log("message" , message);
    this.http.post("http://localhost:4000/api/commands",{body:message})
    .pipe(map((data:Response)=>data.json())
    ).subscribe((data)=>{
      console.log("response"  , data);
      this.response.next(data)
    });
  }

  getResult(){
    return this.response;
  }

  getManPage(){
    return this.manPage;
  }

  downloadManFile(command){
    console.log("command to run " , command);
    this.http.get("http://localhost:4000/api/downloadMan/"+command)
    .pipe(map((data)=>data.text())).subscribe((data)=>{
      this.manPage.next(data);
    })
  }





}
