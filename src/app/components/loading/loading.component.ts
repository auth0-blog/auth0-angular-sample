import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit {
  loadingImg =
    'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';
  constructor() {}

  ngOnInit(): void {}
}
