import { Injectable } from '@angular/core';
import { News } from './News';
import { NewsGettersService } from './getters.service';

@Injectable({
  providedIn: 'root',
})
export class NewsMutationsService {

  constructor(
    private newsGettersService: NewsGettersService,
  ) { }

  public setNews(news: News): void{
    this.newsGettersService.news$.next(news);
  }
}
