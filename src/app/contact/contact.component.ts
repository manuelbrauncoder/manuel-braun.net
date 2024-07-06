import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TsNgxService } from '../shared/services/ts-ngx.service';
import { EmailPopupComponent } from '../email-popup/email-popup.component';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { ScrollToAnchorService } from '../shared/services/scroll-to-anchor.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    EmailPopupComponent,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  mailTest = false;

  currentLanguage: string;

  constructor(
    public translationService: TsNgxService,
    public dialog: MatDialog,
    private router: Router,
    public scrollToAnchorService: ScrollToAnchorService
  ) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  /**
   * navigate to component and scroll to top
   * @param component 
   * @param position 
   */
  goToComponent(component: string, position: number) {
    this.router.navigate([component]);
    window.scrollTo({ top: position });
  }

  /**
   * open dialog and close after timeout
   */
  showDialog() {
    this.dialog.open(EmailPopupComponent, {
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    setTimeout(() => {
      this.dialog.closeAll();
    }, 4000);
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

  /**
   * handle form submit
   * @param ngForm 
   */
  onSubmit(ngForm: NgForm) {
    if (this.isFormSubmitted(ngForm)) {
      this.handleSendMail(ngForm);
    } else if (this.isMailTest(ngForm)) {
      this.handleMailTest(ngForm);
    }
  }

  /**
   * 
   * @param ngForm 
   * @returns true after form is submitted
   */
  isFormSubmitted(ngForm: NgForm) {
    return (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest &&
      this.contactData.privacy
    );
  }

  /**
   * 
   * @param ngForm 
   * @returns true after submit and mailtest = true
   */
  isMailTest(ngForm: NgForm) {
    return (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.mailTest &&
      this.contactData.privacy
    );
  }

  /**
   * handle mail test
   * @param ngForm 
   */
  handleMailTest(ngForm: NgForm) {
    this.showDialog();
    console.log('mail test complete!');
    ngForm.resetForm();
  }

  /**
   * send mail to endpoint
   * @param ngForm 
   */
  handleSendMail(ngForm: NgForm) {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => this.showDialog(),
      });
  }
}
