import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { NewsMutationsService } from './mutations.service';

@Injectable({
  providedIn: 'root',
})
export class NewsActionsService {

  constructor(
    private newsMutationsService: NewsMutationsService,
  ) { }

  public loadNews() {
    // Import the service and call the respective request
    this.newsService.getNews().pipe(
      catchError(() => console.error),
      tap((news) => this.newsMutationsService.setNews(news))
    ).subscribe();
  }
}
