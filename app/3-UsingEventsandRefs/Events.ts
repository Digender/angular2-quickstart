import  {Component} from '@angular/core';

@Component({
	selector:'events-example',
	template:`

	<br><hr><br>
	
	<div class="alert alert-warning">
		This is an example from Tutorial 3 for Events and Refs

			<div class="form-group">
				<label class="control-label col-sm-5">Enter a Number</label>
				<input type="text" class="form-control  col-sm-5" #myInput>
				<button class="btn btn-primary" (click)="onCLick(myInput.value)">Click Me</button>
			</div>
			<span>Entered Value is {{myInput.value}}</span>
	</div>`
})

export class EventsAndRefs {

	onCLick(value){
		console.log(value);
	}
}
