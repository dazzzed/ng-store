import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from './News';

@Injectable({
  providedIn: 'root',
})
export class NewsGettersService {
  public news$ = new BehaviorSubject<News>(new News());
}
