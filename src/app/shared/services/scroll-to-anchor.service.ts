import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollToAnchorService {

  constructor(private scroller: ViewportScroller, private router: Router){

  }

  scrollToAnchor(section: string, offset: number){
    let element = document.getElementById(section);
    if(element){
      let yPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
      this.scroller.scrollToPosition([0, yPosition]);
    }
  }

  goToComponent(component: string, position: number){
    this.router.navigate([component]);
    setTimeout(() => {
      window.scrollTo({top: position});
    }, 50);
  }
}
