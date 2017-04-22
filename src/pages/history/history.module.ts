import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { HistoryPage } from './history';

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
  ],
  exports: [
    HistoryPage
  ],
  providers: [ DatePicker ]
})
export class HistoryModule {}
