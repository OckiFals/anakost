import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { HistoryPage, PopoverPage } from './history';

@NgModule({
  declarations: [
    HistoryPage,
    PopoverPage
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
  ],
  exports: [
    HistoryPage
  ],
  entryComponents: [ PopoverPage ],
  providers: [ DatePicker ]
})
export class HistoryModule {}
