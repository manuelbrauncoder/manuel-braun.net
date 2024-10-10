import { Component } from '@angular/core';
import { TsNgxService } from '../../../shared/services/ts-ngx.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-04',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-04.component.html',
  styleUrl: './project-04.component.scss'
})
export class Project04Component {
  currentLanguage: string;
  
  constructor(public translationService: TsNgxService) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }
}
