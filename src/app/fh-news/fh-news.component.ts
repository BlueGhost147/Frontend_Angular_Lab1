import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fh-news',
  templateUrl: './fh-news.component.html',
  styleUrls: ['./fh-news.component.scss']
})
export class FhNewsComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  date = new Date();

  @Input()
  image = './assets/test.jpg';

  constructor() { }

  ngOnInit() {
  }

}
