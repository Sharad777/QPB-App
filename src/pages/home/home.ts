import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { QuestionPaperPage } from '../question-paper/question-paper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * Create a new Question
   */
  createQuestion() {
    console.log('create');
    this.navCtrl.push(QuestionPage);
  }

  /**
   * Create a new Question Paper
   */
  createQuestionPaper() {
    this.navCtrl.push(QuestionPaperPage);
  }
}
