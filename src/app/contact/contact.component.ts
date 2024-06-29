import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TsNgxService } from '../shared/services/ts-ngx.service';
import { EmailPopupComponent} from "../email-popup/email-popup.component";
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, EmailPopupComponent, DialogModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  }

  mailTest = true;

  currentLanguage: string;

  constructor(public translationService: TsNgxService, public dialog: Dialog) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(EmailPopupComponent, {
      width: '250px',
      height: '250px'
    });

    setTimeout(() => {
      dialogRef.close();
    }, 5000);

    // dialogRef.closed.subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }


  post = {
    endPoint: 'https://manuel-braun.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.contactData.privacy) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.contactData.privacy) {
      console.log('send');
      this.openDialog();
      ngForm.resetForm();
    }
  }
}
