import { bootstrap }    from '@angular/platform-browser-dynamic';
import { InjectExample } from './6-Using_Inject/UsingInject';
import { TodoService } from './Services/TodoService';
import { NgForExample } from './7-NgFor/NgFor';
import {enableProdMode} from '@angular/core';

enableProdMode();
bootstrap(NgForExample,[TodoService]);
