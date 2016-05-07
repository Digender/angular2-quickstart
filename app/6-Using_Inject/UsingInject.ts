import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { TodoService } from '../Services/TodoService';

@Component({
  selector : 'my-app',
  template: `<h1>Injector Example</h1>
              <input type="text" #myInput>
              <button (click)='clickMe(myInput.value)'>Click Me</button>
            `
})

export class InjectExample{
    constructor(@Inject(TodoService) public todoServ){

    }
    clickMe(value){
      this.todoServ.todo.push(value);
      console.log(this.todoServ.todo);
    }
}
