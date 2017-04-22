import { Component } from '@angular/core';
import { IonicPage, AlertController, ToastController } from 'ionic-angular';
import { DbService } from '../../services/db.service';

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(
        private alertCtrl: AlertController, 
        private toastCtrl: ToastController,
        private dbService: DbService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Settings');
    }

    onClearDataConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Confirm delete',
            message: 'Note: All spending history will be erased.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {}
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.dbService.dropDatabase();
                        this.dbService.initial();
                        this.presentToast();
                    }
                }
            ]
        });
        alert.present();
    }

    private presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Data was deleted successfully',
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }

}
