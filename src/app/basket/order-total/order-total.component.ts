import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.scss']
})
export class OrderTotalComponent implements OnInit {
  @Input() gst: number;

  constructor() { }

  ngOnInit() {
  }

}
