import {Component, OnInit} from '@angular/core';
import {PlannedPowerService} from '../services/planned-power.service';

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

}
