import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionPage } from '../pages/question/question';
import { QuestionPaperPage } from '../pages/question-paper/question-paper';
import { QuestionConfigModalPage } from '../pages/question-config-modal/question-config-modal';
import { QuestionPaperConfigModalPage } from '../pages/question-paper-config-modal/question-paper-config-modal';
import { MasterDataProvider } from '../providers/master-data-provider';
import { MasterDataResolver } from '../providers/master-data-resolver';
import { ObjectiveQuestionComponent } from '../components/objective-question/objective-question';
import { MatchTheFollowingQuestionComponent } from '../components/match-the-following-question/match-the-following-question';
import { AddOptionModalPage } from '../pages/add-option-modal/add-option-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionPage,
    QuestionPaperPage,
    QuestionConfigModalPage,
    QuestionPaperConfigModalPage,
    ObjectiveQuestionComponent,
    MatchTheFollowingQuestionComponent,
    AddOptionModalPage
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
    QuestionConfigModalPage,
    QuestionPaperConfigModalPage,
    ObjectiveQuestionComponent,
    MatchTheFollowingQuestionComponent,
    AddOptionModalPage
  ],
  providers: [ { provide: ErrorHandler, useClass: IonicErrorHandler }, MasterDataProvider, MasterDataResolver ]
})
export class AppModule {
}
