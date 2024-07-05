import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TsNgxService } from '../shared/services/ts-ngx.service';
import { ScrollToAnchorService } from "../shared/services/scroll-to-anchor.service";

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})
export class AtfComponent implements AfterViewInit, OnDestroy {
  currentLanguage: string;
  @ViewChild('myImg') myImg!: ElementRef;
  @ViewChild('shapeImg') shapeImg!: ElementRef;
  offset: number = 500;

  constructor(public translationService: TsNgxService,
    private scrollToAnchorService: ScrollToAnchorService,
    private renderer: Renderer2
  ) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.calculatePosition();    
  }

  scrollToElement(element: string) {
    this.scrollToAnchorService.scrollToAnchor(element, -100);
  }

  ngAfterViewInit(): void {
    this.calculatePosition();
  }

  calculatePosition(){
    const referenceRect = this.myImg.nativeElement.getBoundingClientRect();
    const bottomOfReference = referenceRect.bottom - this.offset;
    this.renderer.setStyle(this.shapeImg.nativeElement, 'top', `${bottomOfReference}px`);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
  }
}
