import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { <%= classify(name) %>MutationsService } from './mutations.service';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>ActionsService {

  constructor(
    private <%= name %>MutationsService: <%= classify(name) %>MutationsService,
  ) { }

  public load<%= classify(name) %>() {
    // Import the service and call the respective request
    this.<%= name %>Service.get<%= classify(name) %>().pipe(
      catchError(() => console.error),
      tap((<%= name %>) => this.<%= name %>MutationsService.set<%= classify(name) %>(<%= name %>))
    ).subscribe();
  }
}
