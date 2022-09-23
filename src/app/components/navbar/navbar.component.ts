import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  clicked: boolean = false;

  
  //demo
  bookDemoId: string = 'bookDemo';
  bookDemoTitle: string = 'Book a Demo';
  bookDemoContent: string = 'book a demo content';
  bookDemoModalSize: string = 'lg';
  constructor(public router: Router) {}

  ngOnInit(): void {}

  changeBackground() {
    this.clicked = !this.clicked;
  }
}
