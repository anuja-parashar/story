import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-pie-chart',
  templateUrl: './two-pie-chart.component.html',
  styleUrls: ['./two-pie-chart.component.scss']
})
export class TwoPieChartComponent implements OnInit {
  @Input('graphDetails') graphDetails: any;
  @Input('size') graphSize: any;
  graphData: any
  constructor() { }

  ngOnInit() {
    if (!this.graphSize) {
      this.graphSize = 100
    }
    this.graphData = (this.graphDetails.data) ? this.graphDetails.data : 0
  }

}
