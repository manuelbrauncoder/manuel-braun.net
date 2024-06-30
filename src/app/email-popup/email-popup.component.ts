import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-email-popup',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './email-popup.component.html',
  styleUrl: './email-popup.component.scss',
})
export class EmailPopupComponent {}
