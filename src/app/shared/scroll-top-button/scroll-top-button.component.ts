import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.css']
})
export class ScrollTopButtonComponent {
  isShow: boolean = false;
  topPosToStartShowing: number = 100;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isShow = window.scrollY > this.topPosToStartShowing;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
