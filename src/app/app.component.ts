import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links: Array<{label: string, value: string}>

  ngOnInit() {
    this.links = [
      { label: 'Play', value: '' },
      { label: 'Stay', value: '' },
      { label: 'Eat', value: '' },
      { label: 'Do', value: '' }
    ];
  }
}
