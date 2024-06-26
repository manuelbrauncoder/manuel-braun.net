import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TsNgxService {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    this.changeLanguage('en');
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  get currentLang() {
    return this.translate.currentLang;
  }

  get onLangChange() {
    return this.translate.onLangChange;
  }
}
