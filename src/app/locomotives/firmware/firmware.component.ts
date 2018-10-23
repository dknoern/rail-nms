import { Component, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';

@Component({
    selector: 'app-status-cmp',
    templateUrl: 'firmware.component.html'

})

export class FirmwareComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;

    ngOnInit() {
        this.tableData1 = {
            headerRow: [ 'Locomotive', 'WCM', 'SMM ', 'PowerView', 'HPEAP'],
            dataRows: [
                ['8000', '123.456', '12.341X', '1.3V','12P'],
                ['8001', '123.456', '12.341X', '1.3V','12P'],
                ['8002', '123.456', '12.341X', '1.3V','12P'],
                ['8003', '123.456', '12.341X', '1.3V','12P'],
                ['8004', '123.456', '12.341X', '1.3V','12P'],
                ['8005', '123.456', '12.341X', '1.3V','12P'],
                ['8006', '123.456', '12.341X', '1.3V','12P'],
                ['8007', '123.456', '12.341X', '1.3V','12P'],
                ['8008', '123.456', '12.341X', '1.3V','12P']
              ]
         };
    }
}
