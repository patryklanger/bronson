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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
