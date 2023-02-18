import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { MatTimepickerComponentDialogComponent } from './timepicker-dialog/timepicker-dialog.component';
import { MatTimepickerDirective } from './timepicker.directive';

@NgModule({
    declarations: [
        ClockComponent,
        MatTimepickerDirective,
        MatTimepickerComponentDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule
    ],
    exports: [
        MatTimepickerDirective
    ]
})
export class MatTimepickerModule { }
