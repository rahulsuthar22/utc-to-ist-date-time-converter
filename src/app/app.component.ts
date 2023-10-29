import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DateConveter';
  dateTime: any;
  utcDateTime:any = '';
  year: any;
  month: any;
  day: any;
  onChangeUTC(e: any) {
    console.log("Entered date is : ", e.target.value);

    if (String(new Date(e.target.value)) != "Invalid Date") {

      this.utcDateTime = e.target.value;
      this.dateTime = new Date(e.target.value);
      this.year = this.dateTime.getFullYear();
      this.month = this.dateTime.getMonth() + 1;
      this.day = this.dateTime.getDay();
    } else {

      this.dateTime = "Please Enter Valid Date..";
    }

  }

  onChangeYear(e: any) {
    if (this.dateTime != undefined) {
      this.dateTime = new Date(this.dateTime.setFullYear(e.target.value));
      this.changeISTtoUTC();
    }
  }

  onChangeMonth(e: any) {
    if (this.dateTime != undefined) {
      this.dateTime = new Date(this.dateTime.setMonth(e.target.value - 1));
      this.changeISTtoUTC();
    }
  }

  onChangeDay(e: any) {
    if (this.dateTime != undefined) {
      this.dateTime = new Date(this.dateTime.setDay(e.target.value));
      this.changeISTtoUTC();
    }
  }

  changeISTtoUTC(){
    let date:any = new Date(this.dateTime);
    date = new Date(date.setHours(date.getHours() - 5, date.getMinutes()-30)).toISOString();
    this.utcDateTime = date;
  }
}
