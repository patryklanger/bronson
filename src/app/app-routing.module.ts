import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePageScrollComponent } from './one-page-scroll/one-page-scroll.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: OnePageScrollComponent },
  { path: 'main', component: OnePageScrollComponent },
  { path: 'feeling', component: OnePageScrollComponent },
  { path: 'our-clip', component: OnePageScrollComponent },
  { path: 'we-ensure', component: OnePageScrollComponent },
  { path: 'needs', component: OnePageScrollComponent },
  { path: 'start-with-us', component: OnePageScrollComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'thank-you', component: ThankYouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
