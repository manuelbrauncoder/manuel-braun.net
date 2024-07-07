import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService  {

  aboutMeInView: boolean = false;
  skillsInView: boolean = false;
  portfolioInView: boolean = false;

  constructor() { }

  /**
   * 
   * @param element to observe
   * @param callback fn
   * @param options optional
   * @returns 
   */
  observe(element: Element, callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
    return observer;
  }

  /**
   * unobseve element
   * @param element 
   * @param observer 
   */
  unobserve(element: Element, observer: IntersectionObserver): void {
    observer.unobserve(element);
  }

  /**
   * disconnect observer
   * @param observer 
   */
  disconnect(observer: IntersectionObserver): void {
    observer.disconnect();
  }
}
