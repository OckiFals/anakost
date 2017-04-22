import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { Labels } from '../pages/labels/labels';
import { SettingsPage } from '../pages/settings/settings';

import { DbService } from '../services/db.service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{title: string, icon: string, component: any}>;

    constructor(
        public platform: Platform, 
        public statusBar: StatusBar, 
        public splashScreen: SplashScreen,
        public dbService: DbService
    ) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Today', icon: 'ios-calendar-outline', component: HomePage },
            { title: 'History', icon: 'ios-briefcase-outline', component: HistoryPage },
            { title: 'Labels', icon: 'ios-bookmark-outline', component: Labels },
            { title: 'Settings', icon: 'ios-settings-outline', component: SettingsPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.dbService.initial();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
