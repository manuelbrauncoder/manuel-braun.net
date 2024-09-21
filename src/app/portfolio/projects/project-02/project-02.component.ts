import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TsNgxService } from '../../../shared/services/ts-ngx.service';

@Component({
  selector: 'app-project-02',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project-02.component.html',
  styleUrl: './project-02.component.scss'
})
export class Project02Component {
  currentLanguage: string;

  constructor(public translationService: TsNgxService) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }
}
