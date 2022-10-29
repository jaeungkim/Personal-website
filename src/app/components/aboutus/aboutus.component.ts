import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ColorSchemeService } from '../../services/theme/theme.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent implements OnInit {
  @ViewChild('secondSection', { static: true })
  secondSection: ElementRef<HTMLDivElement>;
  @ViewChild('menu', { static: true }) menu: ElementRef<HTMLDivElement>;
  @ViewChild('menuSecond', { static: true })
  menuSecond: ElementRef<HTMLDivElement>;
  @ViewChild('imageFirst', { static: true })
  imageFirst: ElementRef<HTMLDivElement>;
  @ViewChild('imageSecond', { static: true })
  imageSecond: ElementRef<HTMLDivElement>;
  constructor(public colorSchemeService: ColorSchemeService) {
    this.colorSchemeService.load();
  }

  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    gsap.to(this.menuSecond.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.menuSecond.nativeElement,
        // markers: true,
        start: 'top top',
        scrub: 1,
      },
      duration: 1.1,
      y: 20,
      opacity: 0.3,
      stagger: 0.15,
    });
  }

  initialAnimations(): void {
    // gsap.from(this.menu.nativeElement.childNodes, {
    //   duration: 0.5,
    //   opacity: 0,
    //   y: -20,
    //   stagger: 0.2,
    //   delay: 0.5,
    // });
    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 0.5,
      y: -20,
      stagger: 0.2,
      // delay: 0.8,
    });
  }
}
