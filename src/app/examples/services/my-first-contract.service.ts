import {Injectable} from '@angular/core';
import {Web3Service} from '../../shared/web3/web3.service';
import {from, Observable, ReplaySubject} from 'rxjs';
import {flatMap, tap} from 'rxjs/operators';

declare let require: any;
const abi = require('../../../../build/contracts/MyFirstContract.json');
declare const web3;

@Injectable({
  providedIn: 'root'
})
export class MyFirstContractService {

  private myFirstContract = new ReplaySubject<any>();

  constructor(private web3Service: Web3Service) {
    this.init();
  }

  async init(): Promise<void> {
    const contract = await this.web3Service.artifactsToContract(abi);
    const deployed = await contract.deployed();
    this.myFirstContract.next(deployed);
    this.myFirstContract.complete();
  }

  get(): Observable<string> {
    return this.myFirstContract.pipe(
      tap(() => console.log(7)),
      flatMap(contract => from(contract.get.call())),
      tap(() => console.log(8))
    );
  }

  whoAmI(): Observable<string> {
    return this.myFirstContract.pipe(
      flatMap(contract => from(contract.whoAmI.call({from: web3.eth.defaultAccount})))
      // flatMap(contract => from(contract.whoAmI.call({from: '0xA0bdeA63480Ed4957B62C0D08Be875b8335646Bf'})))
    );
  }
}
