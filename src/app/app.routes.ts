import { Routes } from '@angular/router';
import {AboutUs1} from './shared/pages/about-us-1/about-us-1';
import {ContactUs1} from './shared/pages/contact-us-1/contact-us-1';
import { CompanyServices } from './shared/pages/company-services/company-services';

export const routes: Routes = [
  {
    path:'', redirectTo: '/about-us', pathMatch: 'full'
  },
  {
    path:'about-us', component: AboutUs1
  },
  {
    path:'contact-us', component: ContactUs1
  },
  {
    path:'services', component: CompanyServices
  }
];
