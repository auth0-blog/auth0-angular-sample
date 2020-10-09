// src/app/components/authentication-button/authentication-button.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-authentication-button',
  templateUrl: './authentication-button.component.html',
  styles: [],
})
export class AuthenticationButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
