import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toggle_btn: HTMLElement | null = null;
  big_wrapper: HTMLElement | null = null;
  hamburger_menu: HTMLElement | null = null;
  dark: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.declare();
    this.events();
  }

  declare(): void {
    this.toggle_btn = document.querySelector(".toggle-btn");
    this.big_wrapper = document.querySelector(".big-wrapper");
    this.hamburger_menu = document.querySelector(".hamburger-menu");
  }

  

  events(): void {
   
    this.hamburger_menu?.addEventListener("click", () => {
      this.big_wrapper?.classList.toggle("active");
    });
  }
}
