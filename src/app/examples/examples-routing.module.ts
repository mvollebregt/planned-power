import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MetaSenderComponent} from './meta-sender/meta-sender.component';
import {WhoAmIComponent} from './who-am-i/who-am-i.component';

const routes: Routes = [
  {path: 'meta-sender', component: MetaSenderComponent},
  {path: 'who-am-i', component: WhoAmIComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {
}
