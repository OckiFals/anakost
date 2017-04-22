import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(
    public navCtrl: NavController, 
    public datePicker: DatePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad History');
  }

  onShowDatePicker(): void {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
