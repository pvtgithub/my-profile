import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { InformationComponent } from './components/information/information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabarComponent } from './components/tabar/tabar.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HobbieComponent } from './components/hobbie/hobbie.component';
import { SkillComponent } from './components/skill/skill.component';
import { IntroducComponent } from './components/introduc/introduc.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { CertificationComponent } from './components/certification/certification.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationComponent,
    TabarComponent,
    HobbieComponent,
    SkillComponent,
    IntroducComponent,
    CertificationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgCircleProgressModule.forRoot(),
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
