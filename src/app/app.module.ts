import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionPage } from '../pages/question/question';
import { QuestionPaperPage } from '../pages/question-paper/question-paper';
import { QuestionConfigModalPage } from '../pages/question-config-modal/question-config-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionPage,
    QuestionPaperPage,
    QuestionConfigModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionPage,
    QuestionPaperPage,
    QuestionConfigModalPage
  ],
  providers: [ { provide: ErrorHandler, useClass: IonicErrorHandler } ]
})
export class AppModule {
}
