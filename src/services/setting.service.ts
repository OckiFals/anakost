import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class SettingService {

    constructor(private nativeStorage: NativeStorage) {

    }

    setInitial(): void {
        this.nativeStorage.setItem('installation_date', new Date().toString())
            .then(
                () => {},
                error => {}
            );
    }

    setItem(key: string, val: any): void {
        this.nativeStorage.setItem(key, val)
            .then(
                () => {},
                error => {}
            );
    }

    getItem(key: string): Promise<any> {
        return this.nativeStorage.getItem(key);
    }

    remove(key: string): void {
        this.nativeStorage.remove(key)
            .then(
                () => {},
                error => {}
            );
    }

    clear(): void {
        this.nativeStorage.clear()
            .then(
                () => {},
                error => {}
            );
    }
}