import { Injectable } from '@angular/core';

import {HttpClient , HttpHeaders} from '@angular/common/http';

const baseUrl = "http://localhost:3000/tasks";

const Url= "http://localhost:3000/next";

var httpOptions={
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http:HttpClient) { }
  
  getTasks(){
    return this._http.get(baseUrl);
  }


  // add(){
  //   return this._http.get("http://localhost:4200/add")
  // }

  createTask(task){
    return this._http.post(baseUrl,JSON.stringify(task),httpOptions)
  }

  updateTask(id,task){
    return this._http.put(baseUrl+"/"+id,JSON.stringify(task),httpOptions);
  }

  deleteTask(id){
    return this._http.delete(baseUrl+"/"+id);
  }
  getinfo(id){
    return this._http.get(baseUrl+"/"+id);
  }

  postadd(id,value){
      return this._http.post(Url+'/'+id,JSON.stringify(value),httpOptions)
  }

  getabout(id){
    return this._http.get(Url+"/"+id);
  }
  deleteTasking(id){
    return this._http.delete(Url+"/"+id);
  }
  updateTasking(id,tasks){
    return this._http.put(Url+"/"+id,JSON.stringify(tasks),httpOptions);
  }
}

