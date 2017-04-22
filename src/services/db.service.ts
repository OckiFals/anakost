import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SettingService } from './setting.service';

@Injectable()
export class DbService {
    private sqlite: SQLite;
    private sqlite_open: Promise<SQLiteObject>;

    constructor(private settingService: SettingService) {
        this.openOrCreateDB();
    }

    openOrCreateDB(): void {
        this.sqlite = new SQLite();
        this.sqlite_open = this.sqlite.create({
            name: 'data.db',
            location: 'default'
        });
    }

    initial(): void {
        this.settingService.getItem('installation_date')
            .then(
                (data) => {
                    console.log(data);
                    console.log('Non New Device')

                },
                (error) => {
                    if (2 == error.code) {
                        this.settingService.setInitial();
                        this.setUpTable();
                        console.log('New Device')
                    }
                    console.log(JSON.stringify(error))
                }
            );
    }

    getDbInstance(): Promise<SQLiteObject> {
        return this.sqlite_open;   
    }

    dropDatabase(): void {
        this.sqlite.deleteDatabase({
            name: 'data.db',
            location: 'default'
        });
        this.openOrCreateDB();
        this.setUpTable();
    }

    private setUpTable() {
        this.sqlite_open
        .then((db: SQLiteObject) => {
            // create `spending` table
            db.executeSql(
                "CREATE TABLE IF NOT EXISTS `spending` ( \
                `id` INTEGER PRIMARY KEY AUTOINCREMENT, \
                `title` TEXT NOT NULL, \
                `amount` INTEGER NOT NULL, \
                `label` INTEGER, \
                `timestamp` TEXT NOT NULL \
                );", 
            {})
                .then(() => console.log('Executed SQL `spending`'))
                .catch(e => console.log(e));
            // create `labels` table
            db.executeSql(
                "CREATE TABLE IF NOT EXISTS `labels` ( \
	            `id`	INTEGER PRIMARY KEY AUTOINCREMENT, \
	            `name`	TEXT UNIQUE NOT NULL \
                );", 
            {})
                .then(() => console.log('Executed SQL `labels`'))
                .catch(e => console.log(e));

            // insert `labels` initial data
            db.executeSql(
                "INSERT INTO `labels`(`id`,`name`) \
                SELECT NULL,'Primary' WHERE NOT EXISTS \
                (SELECT `id` FROM `labels` WHERE `name` = 'Primary');", 
            {})
                .then(() => console.log('Executed SQL'))
                .catch(e => console.log(e));
            db.executeSql(
                "INSERT INTO `labels`(`id`,`name`) \
                SELECT NULL,'Secondary' WHERE NOT EXISTS \
                (SELECT `id` FROM `labels` WHERE `name` = 'Secondary');", 
            {})
                .then(() => console.log('Executed SQL'))
                .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
    }
}