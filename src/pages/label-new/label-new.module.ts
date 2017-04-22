import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabelNew } from './label-new';

@NgModule({
  declarations: [
    LabelNew,
  ],
  imports: [
    IonicPageModule.forChild(LabelNew),
  ],
  exports: [
    LabelNew
  ]
})
export class LabelNewModule {}
