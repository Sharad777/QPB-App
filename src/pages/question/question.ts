import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { QuestionConfigModalPage } from '../question-config-modal/question-config-modal';

/*
 Generated class for the Question page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  ngOnInit() {
    this.configureQuestion();
  }

  /**
   * Presents a Modal with Configuration options for Question
   */
  configureQuestion() {
    let modal = this.modalCtrl.create(QuestionConfigModalPage);
    modal.present();
  }

}
