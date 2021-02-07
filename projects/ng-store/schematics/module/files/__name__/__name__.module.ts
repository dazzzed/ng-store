import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %>MutationsService } from './mutations.service';
import { <%= classify(name) %>GettersService } from './getters.service';
import { <%= classify(name) %>ActionsService } from './actions.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    <%= classify(name) %>MutationsService,
    <%= classify(name) %>GettersService,
    <%= classify(name) %>ActionsService
  ]
})
export class <%= classify(name) %>Module {}
