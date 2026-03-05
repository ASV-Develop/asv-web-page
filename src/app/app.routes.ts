import { Routes } from '@angular/router';
import { HomePage } from './shared/pages/home/home';
import { AboutUs1 } from './shared/pages/about-us-1/about-us-1';
import { ContactUs1 } from './shared/pages/contact-us-1/contact-us-1';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about-us',
    component: AboutUs1,
  },
  {
    path: 'contact-us',
    component: ContactUs1,
  },
];
