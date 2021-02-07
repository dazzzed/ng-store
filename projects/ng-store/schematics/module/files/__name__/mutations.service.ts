import { Injectable } from '@angular/core';
import { <%= classify(name) %> } from './<%= classify(name) %>';
import { <%= classify(name) %>GettersService } from './getters.service';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>MutationsService {

  constructor(
    private <%= name %>GettersService: <%= classify(name) %>GettersService,
  ) { }

  public set<%= classify(name) %>(<%= name %>: <%= classify(name) %>): void{
    this.<%= name %>GettersService.<%= name %>$.next(<%= name %>);
  }
}
