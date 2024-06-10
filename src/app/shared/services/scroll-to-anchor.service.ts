import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollToAnchorService {

  constructor(private scroller: ViewportScroller){

  }

  scrollToAnchor(section: string, offset: number){
    let element = document.getElementById(section);
    if(element){
      let yPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
      this.scroller.scrollToPosition([0, yPosition]);
    }
  }
}
