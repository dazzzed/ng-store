import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMutationsService } from './mutations.service';
import { NewsGettersService } from './getters.service';
import { NewsActionsService } from './actions.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    NewsMutationsService,
    NewsGettersService,
    NewsActionsService
  ]
})
export class NewsModule {}
