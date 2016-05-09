import { bootstrap }    from '@angular/platform-browser-dynamic';
import { TodoService } from './Services/TodoService';
import { AppComponent } from './app.component';

console.log("df");

import {enableProdMode} from '@angular/core';

enableProdMode();
bootstrap(AppComponent,[TodoService]);
