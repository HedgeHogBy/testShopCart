import {Component, Inject, OnInit} from '@angular/core';

import {APP_CONFIG, AppConfig} from '../../app-config.module';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {
  gst: number;

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  ngOnInit() {
    this.gst = this.config.gst;
  }

}
