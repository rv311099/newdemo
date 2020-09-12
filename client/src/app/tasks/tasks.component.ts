import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks;

  w;
  id = "";
  public m;
  pass;
  passw;
  

  public newTask = {
    title: "",
    description: "",
    password:""
  }
  

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.getTasks()

    
    //alert("hello")
    //this.passw=prompt("enter your password")
    //console.log(this.passw)
  }

  // add(){
  //    this.taskService.add().subscribe(res=>{

  //    })
  //  }

  getTasks() {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
      //console.log(this.tasks.password)
      //this.passw=prompt("enter your password")
      //console.log(this.tasks.password)
    });
  }

  // validate(){
  //   this.password=prompt("enter your password");
    
  //   while(this.password!=this.newTask.password)
  //   {
  //     alert("enter cottect password")
      
  //   }
  //   alert("corret")
  // }

  // validate(){
  //   this.w=prompt("enter your password")
  //   console.log(this.w);
  //   if(this.w==this.newTask.password){
  //    this.m="ok"
  //   }
  //   else{
  //    this.m="m";
  //   }
  // }

  createTask() {

    
    this.taskService.createTask(this.newTask).subscribe(res => {
      this.cleanVal()
     
      
        this.getTasks();
        
        
      

     // console.log(res['password'])
      
     // console.log(this.passw)
      //this.pass=false;
      
   
    });
  }

  deleteTask(id) {
    console.log(this.newTask.password);
    
    
    this.taskService.deleteTask(id).subscribe(res => {
      this.getTasks();
    });
  
  }

  // getid(id){
  //   this.taskService.getTasks().subscribe(res=>{
  //     console.log(id)
  //   })
  // }

  setUpdate(t) {
    this.id = t._id;
    this.newTask.title = t.title;
    this.newTask.description = t.description;
    this.newTask.password = t.password;
  }

  cleanVal() {
    this.id = "";
    this.newTask = {
      title: "",
      description: "",
      password: ""
    }

  }

  updateTask() {
    this.taskService.updateTask(this.id, this.newTask).subscribe(res => {
      this.cleanVal()
      this.getTasks()
    });
  }

}


