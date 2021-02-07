import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { <%= classify(name) %> } from './<%= classify(name) %>';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>GettersService {
  public <%= name %>$ = new BehaviorSubject<<%= classify(name) %>>(new <%= classify(name) %>());
}
