import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LabelService } from '../../services/label.service';

@IonicPage()
@Component({
  selector: 'page-label-new',
  templateUrl: 'label-new.html',
})
export class LabelNew {

  constructor(
    private navCtrl: NavController,
    private labelService: LabelService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabelNew');
  }

  onAddLabel(label: any) {
    this.labelService.addLabel(label);
    this.navCtrl.pop();
  }

}
