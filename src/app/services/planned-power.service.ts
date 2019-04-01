import {Injectable} from '@angular/core';
import {from, Observable, ReplaySubject} from 'rxjs';
import {flatMap} from 'rxjs/operators';
import {Web3Service} from '../shared/web3/web3.service';
import {Consumption} from '../models/consumption';

declare let require: any;
const abi = require('../../../build/contracts/PlannedPower.json');
declare const web3;

@Injectable({
  providedIn: 'root'
})
export class PlannedPowerService {

  private plannedPower = new ReplaySubject<any>();

  constructor(private web3Service: Web3Service) {
    this.init();
  }

  async init(): Promise<void> {
    const contract = await this.web3Service.artifactsToContract(abi);
    const deployed = await contract.deployed();
    this.plannedPower.next(deployed);
    this.plannedPower.complete();
  }

  getPredictions(): Observable<Consumption[]> {
    return this.plannedPower.pipe(
      flatMap(contract => from(contract.getPredictions.call()))
    );
  }

  setPredictions(predictions: Consumption[]): Observable<void> {
    console.log(predictions);
    return this.plannedPower.pipe(
      flatMap(contract => from(contract.setPredictions.sendTransaction(predictions, {from: web3.eth.defaultAccount})))
    );
  }
}
