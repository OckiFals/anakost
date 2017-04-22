import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DbService } from './db.service';

import { Spending } from '../models/spending.model';

@Injectable()
export class SpendingService {
    private spending: Spending[];

    constructor (
        private dbService: DbService
    ) {}

    addSpending(val: any): void {
        this.spending.push(val);
        this.dbService.getDbInstance()
            .then((db: SQLiteObject) => {
                // TODO: use prepared statement
                db.executeSql(
                    `INSERT INTO 'spending' (id, title, amount, label, timestamp) \
                    VALUES (NULL, "${val.title}", ${val.amount}, ${val.label}, "${val.timestamp}")`, {}
                ).then()
                .catch(e => console.log('Error: ' + JSON.stringify(e)));
            })
            .catch(e => console.log('Error: ' + JSON.stringify(e)));
    }

    getSpendings(): Spending[] {
        this.spending = [];
        this.dbService.getDbInstance()
            .then((db: SQLiteObject) => {
                db.executeSql(
                    "SELECT S.*, L.id AS label_id, L.name AS label_name \
                    FROM `spending` S INNER JOIN `labels` L ON S.label = L.id", {}
                ).then((data) => {
                    if(data.rows.length > 0) {
                        for(var i = 0; i < data.rows.length; i++) {
                            let item = data.rows.item(i);
                            this.spending.push({
                                id: item.id,
                                title: item.title,
                                amount: item.amount,
                                label_id: item.label_id,
                                label: item.label_name,
                                timestamp: new Date().getUTCDate().toLocaleString()
                            });
                        }
                    }
                })
                .catch(e => console.log('Error: ' + JSON.stringify(e)));
            })
            .catch(e => console.log('Error: ' + JSON.stringify(e)));
        return this.spending;
    }
}