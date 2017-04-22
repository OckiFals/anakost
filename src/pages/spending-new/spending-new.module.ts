import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpendingNew } from './spending-new';

import { SpendingService } from '../../services/spending.service';

@NgModule({
  declarations: [
    SpendingNew,
  ],
  imports: [
    IonicPageModule.forChild(SpendingNew),
  ],
  exports: [
    SpendingNew
  ],
  providers: [ SpendingService ]
})
export class SpendingNewModule {}
