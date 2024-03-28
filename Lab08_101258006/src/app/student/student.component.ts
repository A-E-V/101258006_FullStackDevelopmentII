import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  template: '<h1>{{ title }}</h1> <p>Current Date: {{ getCurrentDate() }}</p>'
})
export class StudentComponent {
  title = "My List of Students";

  getTitle() {
    return this.title;
  }

  getCurrentDate(){
    return new Date().toDateString()
}
}