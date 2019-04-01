import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MyFirstContractService} from '../services/my-first-contract.service';

@Component({
  selector: 'app-example',
  templateUrl: './who-am-i.component.html'
})
export class WhoAmIComponent {

  get: Observable<string>;
  whoAmI = of('--- click the button ---');

  constructor(private myFirstContractService: MyFirstContractService) {
    this.get = this.myFirstContractService.get();
  }

  refreshWhoAmI(): void {
    this.whoAmI = this.myFirstContractService.whoAmI();
  }

}
