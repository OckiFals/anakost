import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpendingNew } from '../spending-new/spending-new';

import { SpendingService } from '../../services/spending.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  spending: any[] = [];

  constructor(public navCtrl: NavController, private spendingService: SpendingService) {
  }

  ionViewWillEnter() {
    this.spending = this.spendingService.getSpendings();
  }

  onLoadNewSpending() {
    this.navCtrl.push(SpendingNew)
  }

}
