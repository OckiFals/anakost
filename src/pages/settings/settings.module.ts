import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';
import { SettingService } from '../../services/setting.service';

@NgModule({
    declarations: [
        SettingsPage,
    ],
    imports: [
        IonicPageModule.forChild(SettingsPage),
    ],
    exports: [
        SettingsPage
    ],
    providers: [ SettingService ]
})
export class SettingsModule {}
