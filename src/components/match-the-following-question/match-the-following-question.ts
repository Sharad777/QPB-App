import { Component } from '@angular/core';

@Component({
  selector: 'match-the-following-question',
  templateUrl: 'match-the-following-question.html'
})
export class MatchTheFollowingQuestionComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
