import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { TodoService } from '../Services/TodoService';

@Component({
  selector : 'my-app',
  template: `<h1>Enter value in textbox and Click Add/Press Enter</h1>
              <form>
               <div class="form-group">
                <input class="form-control" (keyup)="onEnter($event,myInput.value)" type="text" #myInput>
                <button class="btn btn-primary" (click)='clickMe(myInput.value)'>Add</button>
              </div>
              </form>
              <ul>
                <li style="list-style:none;" *ngFor="let todo of todoServ.todo;let i = index">Element {{i+1}}: {{todo}}</li>
              </ul>
            `
})

export class NgForExample{
    constructor(@Inject(TodoService) public todoServ){

    }
    clickMe(value){
      this.todoServ.todo.push(value);
      console.log(this.todoServ.todo);
    }
    onEnter(event,value){
      // console.log(event);
      if(event.keyCode==13){
        this.todoServ.todo.push(value);
        console.log(this.todoServ.todo)
      }
    }
}
