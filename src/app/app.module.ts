import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ScrollDownComponent } from './ui/scroll-down/scroll-down.component';
import { FeelingComponent } from './pages/feeling/feeling.component';
import { SemiFooterComponent } from './ui/semi-footer/semi-footer.component';
import { WeEnsureComponent } from './pages/we-ensure/we-ensure.component';
import { NavbarBacklightDirective } from './directive/navbar-backlight.directive';
import { NeedsComponent } from './pages/needs/needs.component';
import { StartWithUsComponent } from './pages/start-with-us/start-with-us.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtMenuComponent } from './ui/art-menu/art-menu.component';
import { OnePageScrollComponent } from './one-page-scroll/one-page-scroll.component';
import { MainPageDirective } from './directive/one-page/main-page.directive';
import { FeelingDirective } from './directive/one-page/feeling.directive';
import { WeEnsureDirective } from './directive/one-page/we-ensure.directive';
import { AppNeedsDirective } from './directive/one-page/app-needs.directive';
import { StartWithUsDirective } from './directive/one-page/start-with-us.directive';
import { VideoPageComponent } from './pages/video-page/video-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    ScrollDownComponent,
    FeelingComponent,
    SemiFooterComponent,
    WeEnsureComponent,
    NavbarBacklightDirective,
    NeedsComponent,
    StartWithUsComponent,
    ContactFormComponent,
    ArtMenuComponent,
    OnePageScrollComponent,
    MainPageDirective,
    FeelingDirective,
    WeEnsureDirective,
    AppNeedsDirective,
    StartWithUsDirective,
    VideoPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
