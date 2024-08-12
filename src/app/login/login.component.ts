import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Ensure DOM elements are available
    const signInBtn = document.querySelector("#sign-in-btn") as HTMLButtonElement;
    const signUpBtn = document.querySelector("#sign-up-btn") as HTMLButtonElement;
    const container = document.querySelector(".container") as HTMLElement;

    if (signInBtn && signUpBtn && container) {
      signUpBtn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });

      signInBtn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    }
  }
}
