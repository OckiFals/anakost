import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, PopoverController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
    template: `
        <ion-list>
            <ion-item *ngFor="let item of popoverItemList" (click)="setSelectedMenu(item.id)">
                {{ item.name }}
            </ion-item>
        </ion-list>
    `
})
export class PopoverPage {
    popoverItemList = [
        {id: 1, name: 'By Date'}
    ];
    selectedMenu: number;

    constructor(public viewCtrl: ViewController) {
        this.selectedMenu = 0;
    }

    setSelectedMenu(selectedItem) {
        this.selectedMenu = selectedItem;
        this.viewCtrl.dismiss(this.selectedMenu);
    }
    
}

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

    constructor(
        public navCtrl: NavController,
        public datePicker: DatePicker,
        public popoverCtrl: PopoverController 
    ) {}

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

    presentPopover(ev) {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({
            ev: ev
        });
        popover.onDidDismiss((popoverData) => {
            if (1 == popoverData) {
                this.onShowDatePicker();
            }
        });
    }

}
