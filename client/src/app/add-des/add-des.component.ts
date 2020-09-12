import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-add-des',
  templateUrl: './add-des.component.html',
  styleUrls: ['./add-des.component.scss']
})
export class AddDesComponent implements OnInit {
  task;
  password;
  t;
  id = "";
 tasks;
  date;
  n
  public Task = {
    disc: ""
  }


  // id='';
  constructor(private router: ActivatedRoute, private taskService: TasksService) { }

  ngOnInit(): void {
    //this.getid(this.id)
    console.log(this.router.snapshot.params.id)
    this.taskService.getinfo(this.router.snapshot.params.id).subscribe((res) => {
      console.log(res)
      //this.task=res;
      // this.password=prompt("enter your password")
      // if(this.password==res['password'])
      // {
      this.task = res['description'];
      this.date=res['title'];
      this.n=res['password'];
      //   }
      //   else{
      //     alert('password wrong!');
      //     this.t="sorry! GO back and try again :("
      //   }
    }

    );
    // this.taskService.getabout(this.router.snapshot.params.id).subscribe(res => {
    //   this.tasks = res;
    this.tasks={
      dist:""
    }

    this.getabout();

  }
  create(){
    this.taskService.postadd(this.router.snapshot.params.id,this.Task).subscribe(res=>{
      // this.cleanVal()
      // this.getTasks();
      console.log(res)
      this.getabout();
      this.cleanVal();
    });
  }
  getabout(){
    this.taskService.getabout(this.router.snapshot.params.id).subscribe(res => {
      this.tasks = res;
      // if (this.tasks.disc==null)
      // {
      //     this.tasks.disc="";
      // }
    });
  }

  cleanVal() {
 
    this.Task = {
      disc: ""
     
    }

  }
  setUpdated(tasks) {
   this.id = tasks._id;
   this.Task.disc=tasks.disc
  }

  deleteTasking(id){

    this.taskService.deleteTasking(id).subscribe(res => {
      this.getabout();
    });
  }

  updateTasking() {
    this.taskService.updateTasking(this.id, this.Task).subscribe(res => {
      this.cleanVal()
      this.getabout()
    });
  }

}