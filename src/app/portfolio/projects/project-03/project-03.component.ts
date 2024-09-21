import { Component } from '@angular/core';
import { TsNgxService } from '../../../shared/services/ts-ngx.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-03',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project-03.component.html',
  styleUrl: './project-03.component.scss'
})
export class Project03Component {

  currentLanguage: string;

  constructor(public translationService: TsNgxService) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

}
