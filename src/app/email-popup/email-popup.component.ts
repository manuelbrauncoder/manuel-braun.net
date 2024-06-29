import { Component, Inject } from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-email-popup',
  standalone: true,
  imports: [FormsModule, DialogModule],
  templateUrl: './email-popup.component.html',
  styleUrl: './email-popup.component.scss'
})
export class EmailPopupComponent {
  constructor(public dialogRef: DialogRef<string>){}
}
