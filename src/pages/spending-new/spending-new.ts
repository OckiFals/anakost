import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { SpendingService } from '../../services/spending.service';
import { LabelService } from '../../services/label.service';

import { Spending } from '../../models/spending.model';

@IonicPage()
@Component({
    selector: 'page-spending-page',
    templateUrl: 'spending-new.html',
})
export class SpendingNew {
    labels: any = [];
    spending: Spending;

    constructor(
        private navCtrl: NavController,
        private spendingService: SpendingService,
        private labelService: LabelService
    ) {
        this.spending = new Spending;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewSpending');
    }

    ionViewDidEnter() {
        this.labels = this.labelService.getLabels();
    }

    onAddSpending() {
        this.spendingService.addSpending(this.spending);
        this.navCtrl.pop();
    }
}
