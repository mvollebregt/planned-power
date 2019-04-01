import {Component, OnInit} from '@angular/core';
import {PlannedPowerService} from '../services/planned-power.service';
import {Consumption} from '../models/consumption';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private plannedPowerService: PlannedPowerService) {
  }

  ngOnInit() {
    this.plannedPowerService.getPredictions().subscribe(console.log);
  }

  onSimulateSomething() {
    const predictions: Consumption[] = [
      {startTimestamp: 123, endTimeStamp: 456, quantitykWh: 10},
      {startTimestamp: 234, endTimeStamp: 567, quantitykWh: -10}
    ];
    this.plannedPowerService.setPredictions(predictions).pipe(
      flatMap(() => this.plannedPowerService.getPredictions())
    ).subscribe(console.log);
  }

}
