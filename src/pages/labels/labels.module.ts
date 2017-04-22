import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Labels } from './labels';

import { LabelService } from '../../services/label.service';

@NgModule({
  declarations: [
    Labels,
  ],
  imports: [
    IonicPageModule.forChild(Labels),
  ],
  exports: [
    Labels
  ],
  providers: [ LabelService ]
})
export class LabelsModule {}
