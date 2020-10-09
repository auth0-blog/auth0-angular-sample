import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
})
export class HomeContentComponent implements OnInit {
  faLink = faLink;

  constructor() {}

  ngOnInit(): void {}
}
