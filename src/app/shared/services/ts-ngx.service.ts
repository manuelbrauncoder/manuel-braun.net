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

  /**
   * change language
   * @param language 
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * return current language
   */
  get currentLang() {
    return this.translate.currentLang;
  }

  /**
   * return changed language
   */
  get onLangChange() {
    return this.translate.onLangChange;
  }
}
