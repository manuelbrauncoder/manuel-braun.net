import { Component } from '@angular/core';
import { TsNgxService } from '../../../shared/services/ts-ngx.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-01',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-01.component.html',
  styleUrl: './project-01.component.scss'
})
export class Project01Component {
  currentLanguage: string;
  joinVersion: 'js' | 'angular' = 'angular';

  changeVersion(version: 'js' | 'angular'){
    this.joinVersion = version;
  }

  constructor(public translationService: TsNgxService) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

}
