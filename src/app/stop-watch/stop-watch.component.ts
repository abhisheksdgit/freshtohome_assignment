import { Component, OnInit } from '@angular/core';

const START = 'START';
const STOP = 'STOP';
const RESET = "RESET";
const MAX_MILLISECONDS = 1000;
const MAX_SECONDS = 60;
const MAX_MINUTES = 99;

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {

  constructor() { }
  buttonName: string = START;
  milliSeconds: number;
  seconds: number;
  minutes: number;
  timer;

  displayMilliSeconds: string = "";
  displaySeconds: string = "";
  displayMinutes: string = "";


  ngOnInit() {
    this.milliSeconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.displayMilliSeconds = "000";
    this.displaySeconds = "00";
    this.displayMinutes = "00";


  }


  handleTimer() {
    if (this.buttonName === START) {
      this.buttonName = STOP;
      this.timer = setInterval(() => {
        if (this.milliSeconds === MAX_MILLISECONDS) {
          this.milliSeconds = 0;
          this.seconds++;
          if (this.seconds === MAX_SECONDS) {
            this.seconds = 0;
            this.minutes++
            if (this.minutes == MAX_MINUTES) {
              this.minutes = 0;
            }

          }
        }
        this.milliSeconds++
        if (this.milliSeconds < 10) {
          this.displayMilliSeconds = "00" + this.milliSeconds;
        } else if (this.milliSeconds < 100) {
          this.displayMilliSeconds = "0" + this.milliSeconds;
        } else {
          this.displayMilliSeconds = this.milliSeconds.toString();
        }

        if (this.seconds < 10) {
          this.displaySeconds = "0" + this.seconds;
        } else {
          this.displaySeconds = this.seconds.toString();
        }

        if (this.minutes < 10) {
          this.displayMinutes = "0" + this.minutes;
        } else {
          this.displayMinutes = this.minutes.toString();
        }

      }, 1);
    } else if (this.buttonName === STOP) {
      clearInterval(this.timer);
      this.buttonName = RESET;
    } else if (this.buttonName === RESET) {
      this.buttonName = START;
      this.milliSeconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.displayMilliSeconds = "000";
      this.displaySeconds = "00";
      this.displayMinutes = "00";
    }

  }


}
