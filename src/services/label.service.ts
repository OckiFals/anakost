import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DbService } from './db.service';

import { Label } from '../models/label.model';

@Injectable()
export class LabelService {
    private labels: Label[];

    constructor(
        private storage: Storage,
        private dbService: DbService
    ) {}

    addLabel(val: any): void {
        this.labels.push(val);
        this.dbService.getDbInstance()
            .then((db: SQLiteObject) => {
                // TODO: use prepared statement
                db.executeSql(
                    `INSERT INTO 'labels' (id, name) \
                    VALUES (NULL, "${val.name}")`, {}
                ).then()
                .catch(e => console.log('Error: ' + JSON.stringify(e)));
            })
            .catch(e => console.log('Error: ' + JSON.stringify(e)));
    }

    getLabels(): Label[] {
        this.labels = [];
        this.dbService.getDbInstance()
            .then((db: SQLiteObject) => {
                db.executeSql(
                    "SELECT * FROM `labels`", {}
                ).then((data) => {
                    if(data.rows.length > 0) {
                        for(var i = 0; i < data.rows.length; i++) {
                            let item = data.rows.item(i);
                            this.labels.push({
                                id: item.id,
                                name: item.name
                            });
                        }
                    }
                })
                .catch(e => console.log('Error: ' + JSON.stringify(e)));
            })
            .catch(e => console.log('Error: ' + JSON.stringify(e)));
        return this.labels;
    }
}