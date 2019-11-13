import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {

  @Input()
  alertMsg = 'Hi';

  @Input()
  buttonTxt = 'Click me!';

  constructor() { }

  ngOnInit() {
  }

  showAlert() {
    alert(this.alertMsg);
  }
}

class ButtonConfig {
  alertMsg: string;
  buttonTxt: string;
  buttonStyle = 'btn btn-primary';

  constructor(alertMsg: string, buttonTxt: string) {
    this.alertMsg = alertMsg;
    this.buttonTxt = buttonTxt;
  }
}
