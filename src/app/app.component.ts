import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-app';
  task:string='';
  tasks:string[] = [];
  addTask(){
    if(this.task.trim()){
      this.tasks.push(this.task.trim());
      this.task='';
    }
  }
  handleDeleteTask(index:number){
    this.tasks.splice(index,1);
  }
}
