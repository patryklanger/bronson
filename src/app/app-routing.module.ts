import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePageScrollComponent } from './one-page-scroll/one-page-scroll.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: VideoPageComponent },
  // { path: 'main', component: OnePageScrollComponent },
  // { path: 'feeling', component: OnePageScrollComponent },
  // { path: 'we-ensure', component: OnePageScrollComponent },
  // { path: 'needs', component: OnePageScrollComponent },
  // { path: 'start-with-us', component: OnePageScrollComponent },
  // { path: 'contact', component: ContactFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
