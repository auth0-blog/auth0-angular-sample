import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
})
export class ExternalApiComponent implements OnInit {
  message: string = null;

  constructor() {}

  ngOnInit(): void {}
}
