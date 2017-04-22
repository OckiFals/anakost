import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LabelService } from '../../services/label.service';

import { LabelNew } from '../label-new/label-new';

import { Label } from '../../models/label.model';

@IonicPage()
@Component({
    selector: 'page-labels',
    templateUrl: 'labels.html',
})
export class Labels {
    labels: Label[];

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private labelService: LabelService
    ) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad Labels');
    }

    ionViewWillEnter() {
        this.labels = this.labelService.getLabels();
    }

    onLoadNewLabel() {
        this.navCtrl.push(LabelNew);
    }

}
