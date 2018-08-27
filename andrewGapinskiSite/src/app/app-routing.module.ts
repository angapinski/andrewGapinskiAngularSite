import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ProfessionalComponent } from 'src/app/professional/professional.component';
import { ExperienceComponent } from 'src/app/experience/experience.component';
import { PortfolioComponent } from 'src/app/portfolio/portfolio.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

 }
