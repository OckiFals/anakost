import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { SpendingService } from '../../services/spending.service';
import { LabelService } from '../../services/label.service';

@IonicPage()
@Component({
    selector: 'page-spending-page',
    templateUrl: 'spending-new.html',
})
export class SpendingNew {
    labels: any = [];

    constructor(
        private navCtrl: NavController,
        private spendingService: SpendingService,
        private labelService: LabelService
    ) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewSpending');
    }

    ionViewDidEnter() {
        this.labels = this.labelService.getLabels();
    }

    onAddSpending(spending: any) {
        this.spendingService.addSpending(spending);
        this.navCtrl.pop();
    }
}
