import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { TodoService } from '../Services/TodoService';

@Component({
  selector : 'inject-app',
  template: `<br><hr><br>
            <div class="alert-success">
          This is done using @Inject() Example
          <h1>Injector Example</h1>
              <input type="text" #myInput>
              <button (click)='clickMe(myInput.value)'>Click Me</button>
        </div>
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
