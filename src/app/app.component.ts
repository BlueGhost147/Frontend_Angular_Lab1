import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'component-demo-app';
  titleStyle = 'headerTitle';
  fhNewsDate = new Date('2012-10-10 10:00');
  lazyMultiply;

  ngOnInit() {
    // Bind the function call to the NG Lifecycle -> Function will be only called once
    const lazyMultiplyFunc = (num1: number, num2: number) => num1 * num2;
    this.lazyMultiply = lazyMultiplyFunc(2, 10);
  }

  add(num1: number, num2: number)
  {
    return num1 + num2;
  }
}
