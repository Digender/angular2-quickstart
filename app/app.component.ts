import {Component} from '@angular/core';
import { Inject } from '@angular/core';
import { TodoInput } from './2-FirstComponent/FirtsComponent';
import { EventsAndRefs } from './3-UsingEventsandRefs/Events';
import { EventsDepth } from './4-EventsInDepth/EventsDepth';
import {InjectAService} from './5-InjectService/InjectService';
import { InjectExample } from './6-Using_Inject/UsingInject';
import {NgForExample} from './7-NgFor/NgFor';
import { TodoService } from './Services/TodoService'

/*This is the root file for all components to register*/
@Component({
    selector:'app-component',
    directives:[TodoInput,EventsAndRefs,EventsDepth,InjectAService,InjectExample,NgForExample], //all components are added to app as directives
    templateUrl: './app/template/template.html', //all selector are used in thhis template for simplicity and understanding
})
export class AppComponent{}
