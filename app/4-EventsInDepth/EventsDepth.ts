import  {Component} from '@angular/core';

@Component({
	selector:'',
	template:`<div>
	<br><hr><br>
	Events ind Deep <br/>
	Try adding more elements and use different events
	<input type="text" #mit>
	<button  (mouseover)="onChick(mit.value)">Mouse over Me</button>
	</div>`
})

export class EventsDepth {

	onChick(value){
		console.log(value);
	}
}
