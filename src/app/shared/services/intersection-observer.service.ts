import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService  {

  aboutMeInView: boolean = false;
  skillsInView: boolean = false;
  portfolioInView: boolean = false;

  constructor() { }

  observe(element: Element, callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
    return observer;
  }

  unobserve(element: Element, observer: IntersectionObserver): void {
    observer.unobserve(element);
  }

  disconnect(observer: IntersectionObserver): void {
    observer.disconnect();
  }
}
