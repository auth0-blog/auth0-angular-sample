// src/app/components/logout-button/logout-button.component.ts

import { Component, Inject, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [],
})
export class LogoutButtonComponent implements OnInit {
  @Input() returnTo: string = null;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {}

  logout(): void {
    let returnTo: string = this.doc.location.origin;
    const pathname = this.doc.location.pathname;
    /**
     * When you want to return the user to a specific page
     * after the user log outs, you must include that path
     * in the "Allowed Logout URLs" on Settings of your
     * Auth0 application registration.
     */
    const sendBackToCurrentPage = pathname.includes('/external-api');

    if (sendBackToCurrentPage) {
      returnTo = this.doc.location.href;
    }

    console.log(returnTo);

    this.auth.logout({
      returnTo,
    });
  }
}
