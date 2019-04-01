import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExamplesRoutingModule} from './examples-routing.module';
import {WhoAmIComponent} from './who-am-i/who-am-i.component';
import {SharedModule} from '../shared/shared.module';
import {MetaSenderComponent} from './meta-sender/meta-sender.component';

@NgModule({
  declarations: [
    MetaSenderComponent,
    WhoAmIComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule
  ]
})
export class ExamplesModule {
}
