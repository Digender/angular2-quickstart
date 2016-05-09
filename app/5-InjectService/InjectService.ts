import  {Component} from '@angular/core';
import {TodoService} from '../Services/TodoService';


@Component({
	selector:'list-and-btn',
	template:
	`<div class="alert danger">
		<br><hr><br>
	  This is an Example of Inecting a service.
	  <input #mit>
	  <button (click)="addToList(mit.value)">Add to todo</button>
	</div>`
})
export class InjectAService {

	constructor(public tServ:TodoService){}

		// console.log(todoServ.todos, "  yo");


	addToList(inp){

		  this.tServ.todo.push(inp);
		 console.log(this.tServ.todo);

	}
}
