import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  OnDestroy,
  HostListener,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TsNgxService } from '../shared/services/ts-ngx.service';
import { ScrollToAnchorService } from '../shared/services/scroll-to-anchor.service';
import { IntersectionObserverService } from '../shared/services/intersection-observer.service';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})
export class AtfComponent implements AfterViewInit, OnDestroy, OnChanges {
  currentLanguage: string;
  @ViewChild('myImg') myImg!: ElementRef;
  @ViewChild('shapeImg') shapeImg!: ElementRef;
  offset: number = 500;

  constructor(
    public translationService: TsNgxService,
    private scrollToAnchorService: ScrollToAnchorService,
    private renderer: Renderer2,
    private intersectionObserverService: IntersectionObserverService
  ) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  /**
   * call method on resizing
   * @param event 
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.calculatePosition();
  }

  /**
   * scroll to element with offset
   * @param element 
   */
  scrollToElement(element: string) {
    this.scrollToAnchorService.scrollToAnchor(element, -100);
  }

  ngAfterViewInit(): void {
    this.calculatePosition();
  }

  /**
   * calculate position from shape image
   */
  calculatePosition() {
    const referenceRect = this.myImg.nativeElement.getBoundingClientRect();
    const bottomOfReference = referenceRect.bottom - this.offset;
    this.renderer.setStyle(
      this.shapeImg.nativeElement,
      'top',
      `${bottomOfReference}px`
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.intersectionObserverService.atfInView){
      console.log('test');
      
      this.calculatePosition();
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
  }
}
